/**
 * Service Worker for Harsh Pandey Portfolio
 * Enables offline functionality and improves performance
 */

const CACHE_NAME = 'harsh-portfolio-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/index.css',
  '/light-theme.css',
  '/flip-cards.css',
  '/filter-buttons.css',
  '/project-animations.css',
  '/mobile-touch.css',
  '/3d-name.css',
  '/particle-animation.css',
  '/responsive.css',
  '/mobile-fixes.css',
  '/accessibility.css',
  '/responsive-meta.css',
  '/image-optimization.css',
  '/script-new.js',
  '/flip-cards.js',
  '/project-animations.js',
  '/mobile-touch.js',
  '/3d-name.js',
  '/particle-animation.js',
  '/responsive-nav.js',
  '/responsive-enhancements.js',
  '/image-loading.js',
  '/assets/images/profile.jpg',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js',
  'https://unpkg.com/aos@2.3.1/dist/aos.js',
  'https://unpkg.com/aos@2.3.1/dist/aos.css'
];

// Install Service Worker and cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app shell and content...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate the Service Worker and clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName.startsWith('harsh-portfolio-') && 
                 cacheName !== CACHE_NAME;
        }).map(cacheName => {
          console.log('Deleting outdated cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network-first strategy with cache fallback
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin) && 
      !event.request.url.startsWith('https://fonts.googleapis.com') &&
      !event.request.url.startsWith('https://cdnjs.cloudflare.com') &&
      !event.request.url.startsWith('https://unpkg.com')) {
    return;
  }
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // For HTML pages, use network-first approach
  if (event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then(response => {
            if (response) {
              return response;
            }
            return caches.match('/index.html');
          });
        })
    );
    return;
  }
  
  // For images, use cache-first approach
  if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request).then(response => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(error => {
          console.error('Error fetching image:', error);
          // Return a placeholder image if available
          return caches.match('/assets/images/placeholder.png');
        });
      })
    );
    return;
  }
  
  // For all other assets, use stale-while-revalidate strategy
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        // Update the cache
        if (networkResponse && networkResponse.ok) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(error => {
        console.error('Fetch failed:', error);
        return null;
      });
      
      // Return the cached response if we have one, otherwise wait for the network response
      return cachedResponse || fetchPromise;
    })
  );
});
