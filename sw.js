self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // Basic fetch listener to satisfy PWA requirements
    e.respondWith(fetch(e.request).catch(() => new Response("Network error.")));
});