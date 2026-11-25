// Minimal service worker so phones can install MKF Bookings as an app. It caches nothing.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* let the network handle everything */ });
