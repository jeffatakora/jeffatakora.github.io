'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a3342e339b74f3528cf0e897e045ee99",
"index.html": "d960349b39f76b709b977dfc877b9d52",
"/": "d960349b39f76b709b977dfc877b9d52",
"main.dart.js": "1d949b9f01055c86788dd6445a099003",
"example/assets/fonts/SF-Pro-Display-Semibold.ttf": "962956e157e4687b7c79d1dafb2b9fb0",
"example/assets/fonts/SF-Pro-Display-Medium.ttf": "8296fbc23d1d42f2954c7af6698cf579",
"example/assets/fonts/SF-Pro-Rounded-Semibold.otf": "02dc9f029efbbe4cd105420f50202dd9",
"example/assets/fonts/SF-Pro-Rounded-Regular.otf": "6720e086a89d34cb9ca424a3ba913082",
"example/assets/fonts/SF-Pro-Display-Regular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"example/assets/fonts/SF-Pro-Display-Bold.ttf": "4e99e4e132b0bd1ccd4e27596b15df8f",
"example/assets/fonts/Hero-New-Bold.ttf": "d272f4fafbaf611b35ae769b8e1239d2",
"example/assets/fonts/Hero-New-Thin.ttf": "4e3a79b2963c37d57838bdff90c47e59",
"example/assets/fonts/CircularStd-Book.ttf": "c43e9feb9ca817ae86afb47fd0ee4f94",
"example/assets/fonts/CircularStd-Black.ttf": "c885948f6112a185e0e6c79963826882",
"example/assets/fonts/CircularStd-Bold.ttf": "ce2a6c4154de87815e8971d21a987403",
"example/assets/fonts/Hero-New-Regular.ttf": "6d0e4c87844423cdf651b082591948e2",
"example/assets/fonts/SF-Pro-Text-Regular.otf": "a07152f3f0c03589a75b218b2c6536cb",
"example/assets/fonts/SF-Pro-Text-Bold.otf": "88b6e0b21919fa6abb7899faa1571f01",
"example/assets/fonts/Hero-New-SemiBold.ttf": "c0c581b6855ab11f44bfdfe8c7c228a6",
"example/assets/fonts/CircularStd-Medium.ttf": "46d551dfd0caa61f1332d7c477f584c2",
"example/assets/fonts/SF-Pro-Rounded-Medium.otf": "137ee8cda3c7f9c388e62aca25c82744",
"example/assets/fonts/SF-Pro-Text-Semibold.otf": "9a7c849b216648913f216d20a21e9aae",
"example/assets/fonts/SF-Pro-Text-Medium.otf": "ded5efe3e8ec62553c3b10f4edd4ca8d",
"example/assets/fonts/SF-Pro-Rounded-Bold.otf": "bf108f8e2fcbda9e4ea2b18ed7799caf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
".git/config": "5ad1621f375f5eeffd48af1dcdfc553b",
".git/objects/0e/d6f7f04bd6f58095be06c9369b129dc6adfd24": "cf36a4c8f6f8676b6a6e64ec746c1882",
".git/objects/be/820e83ebaff2971a7dfe862ad929eae9a04d99": "f9bb30e9ec91a3c69fb8a02aab1a9003",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/3e603fe759ea3f4a8f63dd0d65aa85156a8200": "384d6b19c83063f18c41f44a252eb9cf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/6edf8fe4cd778d56cbd9ad5333f8bb5b4ad797": "7be60abd3bc20b5c841c6c8b39dd88c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "200d94ce0be58e0585ef954abd254cec",
".git/logs/refs/heads/main": "200d94ce0be58e0585ef954abd254cec",
".git/logs/refs/remotes/origin/main": "0868d4099e47a25ce1ec9f96effb5778",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4a64240f049e9dbd9509750ef89aa6ed",
".git/refs/remotes/origin/main": "4a64240f049e9dbd9509750ef89aa6ed",
".git/index": "ecaf951ff9aa5675f43968c8f64ecd04",
".git/COMMIT_EDITMSG": "5d6fa522eb1c0613a79b5db6a143384c",
"assets/AssetManifest.json": "c2f7e9f050298c925c762b4852b5f09c",
"assets/NOTICES": "dc768de8500b135a4c95ef2732e652ba",
"assets/FontManifest.json": "c1c97b8bc6c57a080c30a85413269aa0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBoldItalic.ttf": "3d69caac1feaa544d89721dffa4dae9b",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBold.ttf": "bb41f596e9c909d1279f79b06c11c3eb",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLightItalic.ttf": "18b10873671ef699a9c6b6a562c47c72",
"assets/packages/widgetbook/google_fonts/Nunito-Light.ttf": "038291099699a91e5486d90f6865865b",
"assets/packages/widgetbook/google_fonts/Nunito-Regular.ttf": "1c030dd4e715ec504fe4925864f023fe",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBold.ttf": "06578957e8dca70fbe9573fbce76c0a0",
"assets/packages/widgetbook/google_fonts/Nunito-Bold.ttf": "1387652ed98293a3e2b6639d21d2dd40",
"assets/packages/widgetbook/google_fonts/Nunito-BoldItalic.ttf": "13420730c456db9463829a7a9a8d0c3a",
"assets/packages/widgetbook/google_fonts/Nunito-Black.ttf": "85808a77c229143ee72bbb7784907da8",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLight.ttf": "9894a78faa3fc60eaa8177413c67fc9d",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBoldItalic.ttf": "8e1046cce01ec078ff8a0a03e5e061ed",
"assets/packages/widgetbook/google_fonts/Nunito-BlackItalic.ttf": "788f29842adade8caaf17be2a317e1da",
"assets/packages/widgetbook/google_fonts/OFL.txt": "ee247edc304c64bb2135b9b6ec9a203f",
"assets/packages/widgetbook/google_fonts/Nunito-Italic.ttf": "b8e5eda1dd4207b4f7488718bf1b13f9",
"assets/packages/widgetbook/google_fonts/Nunito-LightItalic.ttf": "2668f7df2cd1d2c95ca64435d9783284",
"assets/packages/deposits_ui_kit/lib/src/assets/custom_json/state.json": "6fa291e5bc5347957a71c384af0e8f87",
"assets/packages/deposits_ui_kit/lib/src/assets/custom_json/city.json": "023aa17018a5ea8bf42e2f71ad4fbf0c",
"assets/packages/deposits_ui_kit/lib/src/assets/custom_json/countries.dart": "0f61eaa5d24092dd034896bfa04a6f16",
"assets/packages/deposits_ui_kit/lib/src/assets/custom_json/country.json": "5ca87997912198c22eeb2e828d211220",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Display-Semibold.ttf": "962956e157e4687b7c79d1dafb2b9fb0",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Display-Medium.ttf": "8296fbc23d1d42f2954c7af6698cf579",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Rounded-Semibold.otf": "02dc9f029efbbe4cd105420f50202dd9",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Rounded-Regular.otf": "6720e086a89d34cb9ca424a3ba913082",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Display-Regular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Display-Light.ttf": "fdd4f443a00654b709cbba595cf6cecd",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Display-Bold.ttf": "4e99e4e132b0bd1ccd4e27596b15df8f",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/Hero-New-Bold.ttf": "d272f4fafbaf611b35ae769b8e1239d2",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/Hero-New-Thin.ttf": "4e3a79b2963c37d57838bdff90c47e59",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/CircularStd-Book.ttf": "c43e9feb9ca817ae86afb47fd0ee4f94",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/CircularStd-Black.ttf": "c885948f6112a185e0e6c79963826882",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/CircularStd-Bold.ttf": "ce2a6c4154de87815e8971d21a987403",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/Hero-New-Regular.ttf": "6d0e4c87844423cdf651b082591948e2",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Text-Regular.otf": "a07152f3f0c03589a75b218b2c6536cb",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Text-Bold.otf": "88b6e0b21919fa6abb7899faa1571f01",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/Hero-New-SemiBold.ttf": "c0c581b6855ab11f44bfdfe8c7c228a6",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/CircularStd-Medium.ttf": "46d551dfd0caa61f1332d7c477f584c2",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Rounded-Medium.otf": "137ee8cda3c7f9c388e62aca25c82744",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Text-Semibold.otf": "9a7c849b216648913f216d20a21e9aae",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Text-Medium.otf": "ded5efe3e8ec62553c3b10f4edd4ca8d",
"assets/packages/deposits_ui_kit/lib/src/assets/fonts/SF-Pro-Rounded-Bold.otf": "bf108f8e2fcbda9e4ea2b18ed7799caf",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/discover.png": "c5f75c2622d51c0074219d3a3e7e024e",
"assets/assets/images/nfinit.png": "d93577a8dc0273decabc1fea5995375c",
"assets/assets/images/myfrsh.png": "fb5747868ce9c8d3a5d9672acee64225",
"assets/assets/images/jcbCard.png": "7ec7520e7eb90dda2a06c2d38d046faf",
"assets/assets/images/brandlogo.png": "122522a7b5b2550b1b4bb41491113ace",
"assets/assets/images/sim.png": "24148cad8c03b041ed9a469f5d043c3e",
"assets/assets/images/expressCard.png": "e36cebb1914d8c667714c2c540b957cf",
"assets/assets/images/renapay.png": "109996c407bb94dd23912d6b00aff5f4",
"assets/assets/images/visaCard.png": "89e4ca37ea87ffe71477504cd29bea73",
"assets/assets/images/masterCard.png": "0b2a8d641fe23797c9404f8133c2f2c2",
"assets/assets/images/verveCard.png": "bed4d5847da340da1ac8b36f743275d4",
"assets/assets/images/launcher_dark.png": "b23ef569e28b99cb8565e895c875c6bc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
