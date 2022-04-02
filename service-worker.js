// /* 
//  Service Worker
//  This is an automatically generated file, please edit only 
//  after refering our official support documents
//  Docs: https://widely.io/support/#/docs/
//  Terms: https://widely.io/terms-of-use     
//  */
// 'use strict';

// if (!params) {              
//     var params = {
//         firebase_url: 'https://progresshive.firebaseio.com/', hashId: '<YOUR HASHID>',
//         defaultIcon: 'https://www.progresshive.io/resource/image/addToHome/launcher-icon-4x.png'
//     };
// }

// importScripts("https://cdn.firebase.com/js/client/2.4.2/firebase.js");

// importScripts("https://widely.global.ssl.fastly.net/api/1.0.3/psw-runtime.js");

// self.addEventListener('message', function (event) {
//     if (event.data.action === 'skipWaiting') {                           
//         self.skipWaiting();   
//     }
// });
// runtime.precache(['/']);
// runtime.options.cache.name = "all-cache";

// runtime.router.get('/(.*)', runtime.networkFirst, { "cache": { "maxEntries": 200, "name": "all-cache", "maxAgeSeconds": 1209600} });
// runtime.router.default = runtime.networkFirst;
var urlsToCache = [
    "https://saurabh200014.github.io/E-Commerce/index.html","https://saurabh200014.github.io/E-Commerce/bootstrap/css/bootstrap.min.css",
    "https://saurabh200014.github.io/E-Commerce/bootstrap/css/bootstrap-responsive.min.css",
    "https://saurabh200014.github.io/E-Commerce/themes/css/bootstrappage.css",
    "https://saurabh200014.github.io/E-Commerce/themes/css/flexslider.css",
    "https://saurabh200014.github.io/E-Commerce/themes/css/main.css",
    "https://saurabh200014.github.io/E-Commerce/themes/js/jquery-1.7.2.min.js",
    "https://saurabh200014.github.io/E-Commerce/bootstrap/js/bootstrap.min.js",
    "https://saurabh200014.github.io/E-Commerce/themes/js/superfish.js",
    "https://saurabh200014.github.io/E-Commerce/themes/js/jquery.scrolltotop.js",
    "https://saurabh200014.github.io/E-Commerce/themes/images/logo.png",
    "https://saurabh200014.github.io/E-Commerce/themes/images/carousel/banner-1.jpg",
    "https://saurabh200014.github.io/E-Commerce/themes/images/carousel/banner-2.jpg",
    "https://saurabh200014.github.io/E-Commerce/themes/images/ladies/1.jpg",
    "https://saurabh200014.github.io/E-Commerce/themes/images/ladies/2.jpg" ,
    "https://saurabh200014.github.io/E-Commerce/themes/images/ladies/3.jpg",
    "https://saurabh200014.github.io/E-Commerce/themes/images/ladies/4.jpg",
    "https://saurabh200014.github.io/E-Commerce/themes/images/ladies/5.jpg",
    "https://saurabh200014.github.io/E-Commerce/themes/images/ladies/6.jpg",
    "https://saurabh200014.github.io/E-Commerce/themes/images/ladies/7.jpg",
    "https://saurabh200014.github.io/E-Commerce/themes/images/ladies/8.jpg",
    "https://saurabh200014.github.io/E-Commerce/themes/images/feature_img_2.png",
    "https://saurabh200014.github.io/E-Commerce/themes/images/feature_img_1.png",
    "https://saurabh200014.github.io/E-Commerce/themes/images/feature_img_3.png",
    "https://saurabh200014.github.io/E-Commerce/themes/images/clients/14.png",
    "https://saurabh200014.github.io/E-Commerce/themes/images/clients/35.png",
    "https://saurabh200014.github.io/E-Commerce/themes/images/clients/1.png",
    "https://saurabh200014.github.io/E-Commerce/themes/images/clients/2.png",
    "https://saurabh200014.github.io/E-Commerce/themes/images/clients/3.png",
    "https://saurabh200014.github.io/E-Commerce/themes/images/clients/4.png",
    
    ];
    self.addEventListener('install', (event) => {
    console.log("service worker installted")
    event.waitUntil(
    caches.open('static')
    .then((cache) => {
    return cache.addAll(urlsToCache);
    })
    );
    });
    self.addEventListener('activate', event => {
    console.log("service worker is register")
    });
    self.addEventListener('fetch', (event) => {
    event.respondWith(
    caches.match(event.request)
    .then((response) => {
    // The responce is in the cache
    if (response) {
    return response;
    }
    // No cache match, we attempt to fetch it from the network
    return fetch(event.request);
    }
    )
    );
    });
