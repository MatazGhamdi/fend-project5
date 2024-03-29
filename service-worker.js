// name of the cache
const cacheName = 'cachedFiles';

//files to be cached
const cachedItems = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/css/styles.css',
  '/js/main.js',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
];

// install serviceworker
self.addEventListener('install', e => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        //add cache files to cache 
        cache.addAll(cachedItems);
      })
      .then(() => self.skipWaiting())
  );
});

// fetch cached files when offline
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
