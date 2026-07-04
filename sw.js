// sw.js — Service Worker: wymusza network-first (zawsze świeża strona)
// Interceptuje wszystkie requesty i pobiera z sieci, ignorując cache

const CACHE_NAME = 'ai-search-v' + Date.now();

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(names.map(function(name) {
        return caches.delete(name);
      }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // Network-first: zawsze pobierz z sieci, ignoruj cache
  e.respondWith(
    fetch(e.request, { cache: 'no-store' })
      .then(function(response) {
        // Zwróć świeżą odpowiedź z sieci
        return response;
      })
      .catch(function() {
        // Fallback do cache tylko jeśli sieść nie działa (offline)
        return caches.match(e.request);
      })
  );
});
