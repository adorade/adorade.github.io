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

  // // Network First
  // [
  //   '/$',  // Index
  //   '/*',  // Anything in the same host
  //   '.+/*' // Anything in any host
  // ]
  // .forEach(mask => {
  //   workbox.routing.registerRoute(
  //       new RegExp(mask),
  //       new workbox.strategies.NetworkFirst( { cacheName: 'dynamic' } )
  //   );
  // });

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
    "revision": "694690361967aeb0237aeff2ed20abc6"
  },
  {
    "url": "css/style.min.css",
    "revision": "1293d9fb45e7070d2d2332287b55e512"
  },
  {
    "url": "index.html",
    "revision": "cab1eb0663e0ec9e515c14a43bd93079"
  },
  {
    "url": "info.html",
    "revision": "2ac30b3fc4e6e90a5f65e7cf663bc5fe"
  },
  {
    "url": "js/script.min.js",
    "revision": "07af9eee5f29f5828aec91061cfeb3c2"
  },
  {
    "url": "js/vendor/unikorn.umd.min.js",
    "revision": "05588c0b7813e00307f24959f2237fa3"
  },
  {
    "url": "portfolio.html",
    "revision": "c3fdf3701d2b998a450c8c607777362a"
  },
  {
    "url": "services.html",
    "revision": "4f7aae7a8d8ac612cf7127943f54670e"
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
