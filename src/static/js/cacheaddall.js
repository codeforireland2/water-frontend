// In your service worker
importScripts('https://cdnjs.cloudflare.com/ajax/libs/cache.adderall/0.1.0/cache.adderall.js')

var STATIC_FILES = [

]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cache-v1').then(cache =>
      adderall.addAll(cache, STATIC_FILES)
    )
  )
})
