importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js'
);

// precache manifest is an array of { url:string, revision: string }
const precacheManifest = (self.__WB_MANIFEST || []).filter(i => i.url === "/index.html"); // We don't want to cache the index.html file.
console.log("Precache manifest", precacheManifest);
workbox.precaching.precacheAndRoute(precacheManifest);