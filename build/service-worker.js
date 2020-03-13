importScripts("/precache-manifest.0706d364a7dded21d8346f4355d608d7.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// Configuration
const dataCacheConfig = {
    cacheName: 'elteam-data',
    plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 86400
        }),
      ],
}

const imagesCacheConfig = {
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 86400
      }),
    ],
}

// Lifecycle methods
self.addEventListener('install', event => {
    console.log('install')
})

self.addEventListener('activate', event => {
    console.log('activate')
})


// Routes
workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.CacheFirst(imagesCacheConfig)
);
  
workbox.routing.registerRoute(
    new RegExp('http://.*'),
    workbox.strategies.networkFirst(dataCacheConfig),
    'GET'
)


// Notifications
self.addEventListener('push', event => {
  event.waitUntil(self.registration.showNotification('Elteam', {
    icon: 'android-chrome-192x192.png',
    body: event.data.text()
  }))
})



// Blanks

// workbox.routing.registerRoute(
//     /http:\/\/192\.168\.219\.87\/api\/json\/api\.php\?\w+/,
//     workbox.strategies.networkFirst(dataCacheConfig),
//     'GET'
// )

// self.addEventListener('notificationclick', function(event) {
//   let notification = event.notification;
//   let action = event.action;
//   if(action === 'confirm') {

//   }
//   console.log(notification)
// })
