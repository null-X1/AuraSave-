// ================== إعدادات متقدمة ==================
const SECRET_TOKEN = process.env.API_SECRET_KEY || 'KIKVID_9xA!@2026';

// إعدادات الكاش
const CACHE_TTL = 10 * 60 * 1000; // 10 دقائق
const MAX_CACHE_SIZE = 100;

// LRU Cache متقدم
class LRUCache {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.cache = new Map();
        this.stats = {
            hits: 0,
            misses: 0,
            evictions: 0
        };
    }

    get(key) {
        if (!this.cache.has(key)) {
            this.stats.misses++;
            return null;
        }
        
        const item = this.cache.get(key);
        // Move to end (most recently used)
        this.cache.delete(key);
        this.cache.set(key, item);
        this.stats.hits++;
        return item;
    }

    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.maxSize) {
            // Remove oldest
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
            this.stats.evictions++;
        }
        this.cache.set(key, value);
    }

    clear() {
        this.cache.clear();
        this.stats = { hits: 0, misses: 0, evictions: 0 };
    }
}

const cache = new LRUCache(MAX_CACHE_SIZE);

// Rate Limiter متقدم
class RateLimiter {
    constructor(maxRequests, windowMs) {
        this.maxRequests = maxRequests;
        this.windowMs = windowMs;
        this.requests = new Map();
        this.blockedIPs = new Map();
    }

    isAllowed(ip) {
        // التحقق من IPs المحظورة
        if (this.blockedIPs.has(ip)) {
            const blockTime = this.blockedIPs.get(ip);
            if (Date.now() - blockTime < 5 * 60 * 1000) { // 5 دقائق حظر
                return false;
            }
            this.blockedIPs.delete(ip);
        }

        const now = Date.now();
        const userRequests = this.requests.get(ip) || [];
        
        // تنظيف الطلبات القديمة
        const validRequests = userRequests.filter(time => now - time < this.windowMs);
        
        if (validRequests.length >= this.maxRequests) {
            // حظر IP مؤقتاً
            this.blockedIPs.set(ip, now);
            return false;
        }
        
        validRequests.push(now);
        this.requests.set(ip, validRequests);
        return true;
    }

    cleanup() {
        const now = Date.now();
        for (const [ip, requests] of this.requests.entries()) {
            const validRequests = requests.filter(time => now - time < this.windowMs);
            if (validRequests.length === 0) {
                this.requests.delete(ip);
            } else {
                this.requests.set(ip, validRequests);
            }
        }
        
        // تنظيف IPs المحظورة القديمة
        for (const [ip, blockTime] of this.blockedIPs.entries()) {
            if (now - blockTime >= 5 * 60 * 1000) {
                this.blockedIPs.delete(ip);
            }
        }
    }
}

const rateLimiter = new RateLimiter(20, 60000); // 20 طلب/دقيقة

// تنظيف دوري
setInterval(() => {
    cache.cleanup && cache.cleanup();
    rateLimiter.cleanup();
}, 300000); // كل 5 دقائق

// تحسينات الأداء
const USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0'
];

// ================== معالج API ==================
export default async function handler(req, res) {
    // تمكين CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key, X-Requested-With');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ 
            error: 'Method not allowed',
            allowed: ['GET', 'OPTIONS']
        });
    }

    // التحقق من التوكن
    const token = req.headers['x-api-key'];
    if (!token || token !== SECRET_TOKEN) {
        return res.status(401).json({ 
            error: 'Unauthorized',
            message: 'Invalid or missing API key'
        });
    }

    // Rate Limiting
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    if (!rateLimiter.isAllowed(ip)) {
        return res.status(429).json({ 
            error: 'Too many requests',
            message: 'Rate limit exceeded. Please try again later.',
            retryAfter: 300 // 5 دقائق
        });
    }

    // التحقق من المعطيات
    const { data } = req.query;
    if (!data) {
        return res.status(400).json({ 
            error: 'Missing data parameter',
            message: 'URL parameter is required'
        });
    }

    // فك تشفير URL
    let url;
    try {
        const decoded = Buffer.from(data, 'base64').toString();
        url = decodeURIComponent(decoded);
        
        // التحقق من صحة URL
        if (!isValidTikTokUrl(url)) {
            return res.status(400).json({ 
                error: 'Invalid URL',
                message: 'Please provide a valid TikTok URL'
            });
        }
    } catch (error) {
        return res.status(400).json({ 
            error: 'Invalid data',
            message: 'Failed to decode URL'
        });
    }

    // التحقق من الكاش
    const cacheKey = `video_${Buffer.from(url).toString('base64')}`;
    const cached = cache.get(cacheKey);
    const now = Date.now();

    if (cached && (now - cached.timestamp < CACHE_TTL)) {
        res.setHeader('X-Cache', 'HIT');
        res.setHeader('X-Cache-Hits', cache.stats.hits);
        res.setHeader('X-Cache-Misses', cache.stats.misses);
        
        return res.status(200).json({
            ...cached.data,
            cached: true,
            timestamp: cached.timestamp
        });
    }

    // محاولات Fallback
    const fallbackAPIs = [
        async () => await tryTikWM(url),
        async () => await trySnapTik(url),
        async () => await tryTikMate(url)
    ];

    let result = null;
    let lastError = null;

    for (const apiCall of fallbackAPIs) {
        try {
            result = await apiCall();
            if (result) break;
        } catch (error) {
            lastError = error;
            console.log(`Fallback API failed: ${error.message}`);
            continue;
        }
    }

    if (!result) {
        return res.status(500).json({
            error: 'Download failed',
            message: 'All download methods failed',
            details: lastError?.message || 'Unknown error'
        });
    }

    // حفظ في الكاش
    cache.set(cacheKey, {
        data: result,
        timestamp: now
    });

    // إرجاع النتيجة
    res.setHeader('X-Cache', 'MISS');
    res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.setHeader('X-Cache-Hits', cache.stats.hits);
    res.setHeader('X-Cache-Misses', cache.stats.misses);

    return res.status(200).json({
        ...result,
        cached: false,
        timestamp: now
    });
}

// ================== دوال المساعدة ==================
function isValidTikTokUrl(url) {
    try {
        const urlObj = new URL(url);
        const tiktokRegex = /^(www\.)?(tiktok\.com|vm\.tiktok\.com|vt\.tiktok\.com)$/;
        return tiktokRegex.test(urlObj.hostname);
    } catch {
        return false;
    }
}

async function tryTikWM(url) {
    const apiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}&hd=1`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'User-Agent': USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)],
                'Accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.9',
                'Referer': 'https://www.tiktok.com/'
            },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (!data.data) {
            throw new Error('Invalid response from TikWM');
        }

        return {
            success: true,
            video: data.data.hdplay || data.data.play,
            audio: data.data.music,
            images: data.data.images || [],
            cover: data.data.cover,
            title: data.data.title || 'TikTok Video',
            duration: data.data.duration,
            author: data.data.author?.nickname || 'Unknown',
            watermark: false,
            quality: data.data.hdplay ? 'HD' : 'SD'
        };
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}

async function trySnapTik(url) {
    const apiUrl = `https://snaptik.app/api/v1/get?url=${encodeURIComponent(url)}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'User-Agent': USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)],
                'Accept': 'application/json'
            },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (!data.data?.video_url) {
            throw new Error('Invalid response from SnapTik');
        }

        return {
            success: true,
            video: data.data.video_url,
            audio: data.data.music_url,
            images: [data.data.thumbnail_url],
            cover: data.data.thumbnail_url,
            title: data.data.title || 'TikTok Video',
            duration: 0,
            author: 'Unknown',
            watermark: false,
            quality: 'HD'
        };
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}

async function tryTikMate(url) {
    const apiUrl = `https://api.tikmate.app/api/lookup?url=${encodeURIComponent(url)}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'User-Agent': USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)],
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (!data.url) {
            throw new Error('Invalid response from TikMate');
        }

        return {
            success: true,
            video: data.url,
            audio: data.music,
            images: [],
            cover: data.thumbnail,
            title: 'TikTok Video',
            duration: 0,
            author: 'Unknown',
            watermark: false,
            quality: 'HD'
        };
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}