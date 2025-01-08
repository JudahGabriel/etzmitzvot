importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js'
);

const precacheManifest = self.__WB_MANIFEST || [];
workbox.precaching.precacheAndRoute(precacheManifest);