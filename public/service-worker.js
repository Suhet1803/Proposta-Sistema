self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('webcache').then((cache) => {
      return cache.addAll([
        '/',
        'C:/Users/gabri/sistema-proposta/public/logo.png',
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  console.log('requested: ',e.request.url);
  var url = new URL(e.request.url);
  console.log(url.pathname);
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});