
const staticHorariosPWA = "horarios-apw-v2.2.5"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/dados.js",
  "/favicon-32x32.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticHorariosPWA).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

const deleteCache = async (key) => {
  await caches.delete(key)
}

const deleteOldCaches = async () => {
   const cacheKeepList = [staticHorariosPWA];
   const keyList = await caches.keys()
   const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key))
   await Promise.all(cachesToDelete.map(deleteCache));
}

self.addEventListener('activate', (event) => {
  event.waitUntil(deleteOldCaches());
});