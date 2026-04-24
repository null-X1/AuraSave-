// ================== إعدادات متقدمة ==================
const CACHE_TTL = 10 * 60 * 1000; // 10 دقائق
const MAX_CACHE_SIZE = 100;

class LRUCache {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key)) return null;
        const item = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, item);
        return item;
    }
    set(key, value) {
        if (this.cache.has(key)) this.cache.delete(key);
        else if (this.cache.size >= this.maxSize) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }
}
const cache = new LRUCache(MAX_CACHE_SIZE);

class RateLimiter {
    constructor(maxRequests, windowMs) {
        this.maxRequests = maxRequests;
        this.windowMs = windowMs;
        this.requests = new Map();
        this.blockedIPs = new Map();
    }
    isAllowed(ip) {
        if (this.blockedIPs.has(ip)) {
            const blockTime = this.blockedIPs.get(ip);
            if (Date.now() - blockTime < 5 * 60 * 1000) return false;
            this.blockedIPs.delete(ip);
        }
        const now = Date.now();
        const userRequests = this.requests.get(ip) || [];
        const validRequests = userRequests.filter(time => now - time < this.windowMs);
        if (validRequests.length >= this.maxRequests) {
            this.blockedIPs.set(ip, now);
            return false;
        }
        validRequests.push(now);
        this.requests.set(ip, validRequests);
        return true;
    }
}
const rateLimiter = new RateLimiter(20, 60000); 

const USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
];

// ================== معالج API الرئيسي ==================
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    if (!rateLimiter.isAllowed(ip)) {
        return res.status(429).json({ error: 'Too many requests', message: 'الرجاء المحاولة لاحقاً بعد 5 دقائق.' });
    }

    // ================= مسار الـ PROXY لتحميل الفيديو وتخطي مشكلة CORS =================
    if (req.query.action === 'proxy' && req.query.proxyUrl) {
        try {
            const proxyUrl = decodeURIComponent(req.query.proxyUrl);
            const response = await fetch(proxyUrl, { headers: { 'User-Agent': USER_AGENTS[0] } });
            
            if (!response.ok) throw new Error('Proxy fetch failed');

            // إرسال الهيدرز لفرض التحميل وتمرير نوع الملف
            res.setHeader('Content-Type', response.headers.get('content-type') || 'application/octet-stream');
            res.setHeader('Content-Disposition', 'attachment; filename="AuraSave_Download.mp4"');
            
            // تحويل الـ Stream للعميل مباشرة
            const buffer = await response.arrayBuffer();
            return res.send(Buffer.from(buffer));
        } catch (error) {
            return res.status(500).json({ error: 'Proxy download failed' });
        }
    }

    // ================= مسار جلب معلومات الفيديو الأصلي =================
    const { data } = req.query;
    if (!data) return res.status(400).json({ error: 'Missing data parameter' });

    let url;
    try {
        const decoded = Buffer.from(data, 'base64').toString();
        url = decodeURIComponent(decoded);
        if (!isValidTikTokUrl(url)) return res.status(400).json({ error: 'Invalid TikTok URL' });
    } catch (error) {
        return res.status(400).json({ error: 'Failed to decode URL' });
    }

    const cacheKey = `video_${Buffer.from(url).toString('base64')}`;
    const cached = cache.get(cacheKey);
    const now = Date.now();

    if (cached && (now - cached.timestamp < CACHE_TTL)) {
        res.setHeader('X-Cache', 'HIT');
        return res.status(200).json({ ...cached.data, cached: true });
    }

    const fallbackAPIs = [ () => tryTikWM(url), () => trySnapTik(url), () => tryTikMate(url) ];
    let result = null; let lastError = null;

    for (const apiCall of fallbackAPIs) {
        try {
            result = await apiCall();
            if (result) break;
        } catch (error) {
            lastError = error; continue;
        }
    }

    if (!result) return res.status(500).json({ error: 'Download failed', message: 'فشلت جميع المحاولات.' });

    cache.set(cacheKey, { data: result, timestamp: now });
    res.setHeader('X-Cache', 'MISS');
    return res.status(200).json({ ...result, cached: false });
}

// ================== دوال المساعدة ==================
function isValidTikTokUrl(url) {
    try { return /tiktok\.com$/.test(new URL(url).hostname); } catch { return false; }
}

async function tryTikWM(url) {
    const response = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}&hd=1`, { headers: { 'User-Agent': USER_AGENTS[0] } });
    const data = await response.json();
    if (!data.data) throw new Error('TikWM Failed');
    return {
        success: true, video: data.data.hdplay || data.data.play, audio: data.data.music,
        images: data.data.images || [], cover: data.data.cover, title: data.data.title || 'AuraSave Video', author: data.data.author?.nickname || 'TikTok User'
    };
}

async function trySnapTik(url) {
    const response = await fetch(`https://snaptik.app/api/v1/get?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    if (!data.data?.video_url) throw new Error('SnapTik Failed');
    return {
        success: true, video: data.data.video_url, audio: data.data.music_url, images: [data.data.thumbnail_url],
        cover: data.data.thumbnail_url, title: data.data.title || 'AuraSave Video'
    };
}

async function tryTikMate(url) {
    const response = await fetch(`https://api.tikmate.app/api/lookup?url=${encodeURIComponent(url)}`, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    const data = await response.json();
    if (!data.url) throw new Error('TikMate Failed');
    return { success: true, video: data.url, audio: data.music, images: [], cover: data.thumbnail, title: 'AuraSave Video' };
}