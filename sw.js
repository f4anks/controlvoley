const CACHE_NAME = 'voley-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/index_menu.html',
  '/index_atletas.html',
  '/index_datos.html',
  '/index_ficha.html',
  '/index_cumple.html',
  '/index_estad.html',
  '/img/banner.png'
];

// Instalación
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Estrategia: Red primero, si falla, usa caché
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
