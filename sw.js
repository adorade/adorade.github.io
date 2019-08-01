/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */
/* globals importScripts, workbox */

// Import workbox-sw, which defines the global `workbox` object.
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded');

  // Force production builds, set to false
  workbox.setConfig({ debug: false });

  /**
   * The workboxSW.precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precaching.precacheAndRoute([
  {
    "url": "contact.html",
    "revision": "f4f118e749a11157cd3b027b5fdedb7f"
  },
  {
    "url": "css/style.min.css",
    "revision": "c837e6f072cd6f90eaa9081eb1dd1cf0"
  },
  {
    "url": "index.html",
    "revision": "bab9ea2215de97e86a6fcaf054970c41"
  },
  {
    "url": "info.html",
    "revision": "7e149b82762811b259729f7414d3d965"
  },
  {
    "url": "js/script.min.js",
    "revision": "120963dc0313399eb537ecca0c249112"
  },
  {
    "url": "js/vendor/unikorn.umd.min.js",
    "revision": "05588c0b7813e00307f24959f2237fa3"
  },
  {
    "url": "portfolio.html",
    "revision": "53298764e5981afbb2c613e968cde1e2"
  },
  {
    "url": "services.html",
    "revision": "d8f13c861d451cdccdadd4363921dd23"
  }
]);

  // Enable Offline Google Analytics
  workbox.googleAnalytics.initialize();

  // Cache the Google Fonts webfont files with a CacheFirst strategy for 1 year.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-stylesheets',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        })
      ]
    })
  );

  // Caching Images for 7 days
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 20,
          maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
        })
      ]
    })
  );

  // Handle jQuery cdn requests
  workbox.routing.registerRoute(
    /^https:\/\/code\.jquery\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'jquery-cdn',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 1 * 24 * 60 * 60 // 1 day
        })
      ]
    })
  );

  // Handle cdnjs requests
  workbox.routing.registerRoute(
    /^https:\/\/cdnjs\.cloudflare\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'cdnjs-cloudflare',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 1 * 24 * 60 * 60 // 1 day
        })
      ]
    })
  );
} else {
  console.log("Boo! Workbox didn't load");
}
