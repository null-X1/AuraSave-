// Service Worker متقدم
const CACHE_NAME = 'kikvid-v2.0.0';
const OFFLINE_VERSION = 1;
const CACHEABLE_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

// إحصائيات الكاش
const cacheStats = {
  hits: 0,
  misses: 0,
  updates: 0
};

// استراتيجيات التخزين المؤقت
const CACHE_STRATEGIES = {
  STATIC: 'static',
  DYNAMIC: 'dynamic',
  NETWORK_FIRST: 'network-first'
};

// ============ تثبيت Service Worker ============
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(CACHEABLE_ASSETS);
      })
      .then(() => {
        console.log('[Service Worker] Skip waiting');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[Service Worker] Install failed:', error);
      })
  );
});

// ============ تفعيل Service Worker ============
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    Promise.all([
      // تنظيف الكاش القديم
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('[Service Worker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // التحكم في العملاء
      self.clients.claim()
    ])
  );
});

// ============ معالجة الطلبات ============
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // تجاهل طلبات غير GET
  if (request.method !== 'GET') {
    return;
  }

  // تجاهل طلبات API
  if (url.pathname.startsWith('/api/')) {
    return;
  }

  // تجاهل طلبات extensions
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  // تحديد الاستراتيجية بناءً على نوع الطلب
  const strategy = getCacheStrategy(request);
  
  switch (strategy) {
    case CACHE_STRATEGIES.STATIC:
      event.respondWith(handleStatic(request));
      break;
      
    case CACHE_STRATEGIES.NETWORK_FIRST:
      event.respondWith(handleNetworkFirst(request));
      break;
      
    case CACHE_STRATEGIES.DYNAMIC:
      event.respondWith(handleDynamic(request));
      break;
      
    default:
      event.respondWith(handleDefault(request));
  }
});

// ============ استراتيجيات التخزين المؤقت ============
function getCacheStrategy(request) {
  const url = new URL(request.url);
  
  // الموارد الثابتة
  if (CACHEABLE_ASSETS.some(asset => url.pathname.endsWith(asset))) {
    return CACHE_STRATEGIES.STATIC;
  }
  
  // الصفحات الرئيسية
  if (request.headers.get('accept').includes('text/html')) {
    return CACHE_STRATEGIES.NETWORK_FIRST;
  }
  
  // الموارد الديناميكية
  if (request.destination === 'image' || 
      request.destination === 'font' ||
      request.destination === 'style') {
    return CACHE_STRATEGIES.DYNAMIC;
  }
  
  return CACHE_STRATEGIES.NETWORK_FIRST;
}

async function handleStatic(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    cacheStats.hits++;
    return cachedResponse;
  }
  
  cacheStats.misses++;
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
      cacheStats.updates++;
    }
    
    return networkResponse;
  } catch (error) {
    // Fallback للصفحة الرئيسية
    if (request.mode === 'navigate') {
      return cache.match('/');
    }
    throw error;
  }
}

async function handleNetworkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    // تحديث الكاش
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
      cacheStats.updates++;
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[Service Worker] Network failed, serving from cache:', error);
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      cacheStats.hits++;
      return cachedResponse;
    }
    
    cacheStats.misses++;
    
    // Fallback للصفحة الرئيسية
    if (request.mode === 'navigate') {
      return cache.match('/');
    }
    
    throw error;
  }
}

async function handleDynamic(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    cacheStats.hits++;
    
    // تحديث الكاش في الخلفية
    fetch(request)
      .then(networkResponse => {
        if (networkResponse.ok) {
          cache.put(request, networkResponse);
          cacheStats.updates++;
        }
      })
      .catch(() => {
        // تجاهل الأخطاء في التحديث في الخلفية
      });
    
    return cachedResponse;
  }
  
  cacheStats.misses++;
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
      cacheStats.updates++;
    }
    
    return networkResponse;
  } catch (error) {
    // لا يوجد fallback للصور والخطوط
    throw error;
  }
}

async function handleDefault(request) {
  try {
    return await fetch(request);
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      cacheStats.hits++;
      return cachedResponse;
    }
    
    cacheStats.misses++;
    throw error;
  }
}

// ============ معالجة الرسائل ============
self.addEventListener('message', event => {
  const { data } = event;
  
  switch (data.type) {
    case 'GET_CACHE_STATS':
      event.ports[0].postMessage(cacheStats);
      break;
      
    case 'CLEAR_CACHE':
      caches.delete(CACHE_NAME)
        .then(() => {
          cacheStats.hits = 0;
          cacheStats.misses = 0;
          cacheStats.updates = 0;
          event.ports[0].postMessage({ success: true });
        })
        .catch(error => {
          event.ports[0].postMessage({ success: false, error: error.message });
        });
      break;
      
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
  }
});

// ============ معالجة المزامنة في الخلفية ============
self.addEventListener('sync', event => {
  console.log('[Service Worker] Background sync:', event.tag);
  
  if (event.tag === 'update-cache') {
    event.waitUntil(updateCacheBackground());
  }
});

async function updateCacheBackground() {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    const updates = await Promise.all(
      CACHEABLE_ASSETS.map(async asset => {
        try {
          const response = await fetch(asset);
          if (response.ok) {
            await cache.put(asset, response);
            return { asset, status: 'updated' };
          }
        } catch (error) {
          console.log(`[Service Worker] Failed to update ${asset}:`, error);
        }
        return { asset, status: 'failed' };
      })
    );
    
    console.log('[Service Worker] Background update complete:', updates);
  } catch (error) {
    console.error('[Service Worker] Background sync failed:', error);
  }
}

// ============ معالجة الدفع ============
self.addEventListener('push', event => {
  const options = {
    body: event.data?.text() || 'New update available!',
    icon: '/icon-192x192.png',
    badge: '/icon-96x96.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'open',
        title: 'Open App'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Kik Vid', options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// ============ معالجة حالة عدم الاتصال ============
self.addEventListener('offline', () => {
  console.log('[Service Worker] Offline mode activated');
  
  // إرسال رسالة لجميع العملاء
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({
        type: 'OFFLINE_STATUS',
        offline: true
      });
    });
  });
});

self.addEventListener('online', () => {
  console.log('[Service Worker] Online mode activated');
  
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({
        type: 'OFFLINE_STATUS',
        offline: false
      });
    });
  });
});