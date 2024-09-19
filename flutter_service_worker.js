'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
".git/config": "b13c41f1e50c2545f9a2c430f6899fb0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "301c31a5ead182231827edc4caf3d03e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6129dcaa2fd87260e246135c6d2b0b10",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "59e59eb68b4a5769f72bf030eb200e3b",
".git/logs/refs/heads/main": "5cdad0b6f101befce7c54df26c86939d",
".git/logs/refs/heads/master": "07f80781c7b002eb636ca0addd56a31c",
".git/logs/refs/remotes/origin/main": "bf314bef574fa72183d5b6cd63ee5f31",
".git/logs/refs/remotes/origin/master": "f5513c6e688d08d7d47e69eedfb9399a",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/0a/684b3d228ece822d412e809a18258fe45f668c": "42ef84620a5e3b0b951c58ac100a8c94",
".git/objects/10/88e349e4cd180c0b500048eaf040d32739701a": "ac08fd86c342cf6c7329b88d2e34cb63",
".git/objects/10/b3b1fde15e9a1057a1505542e838d931938f90": "4151ff252e5a172058d351cde82acd67",
".git/objects/17/3cf5e7094c8b75234aea5240304c16652b30bd": "402f1e436f27e32b6ee85c19b43ffea8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/21/524ab084c8dbe397a184648062bdcb8ca2eb77": "bea90cc53798b99faba53e3020cfd32a",
".git/objects/24/b1a7b07b88e539ee2c86558a3c8d2a5b141f49": "69b2575f4bfb3da8165e79e3015a04c1",
".git/objects/24/baf5734cad04f23d159319abaa4b269ecd870e": "2608444718d4564fc571f7b516d1547c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/25/fe25043e8118b3f390f2f5df134dce10dfb6da": "3347bbc4b20c0c5b3fef04395b2c972b",
".git/objects/2b/8b4141a995373cb395660f40e5739d072c3e45": "9a5c86e8b94ed7bfae3ba8d5ad24fd99",
".git/objects/2d/3dee102d581fa4f8c0dd8f9e0d92b355ee7ca4": "6169b2af7ba5c8bec33909e08224cc8b",
".git/objects/2f/9e9d44664aeb1cbaca427f0cbd10dbe2da1016": "d3480efa31e0a19be94a6ad5d8cd9021",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/4e/1702567128cfa3ec078904f922f039e91dee92": "9780fe31f681431d41aedc5cea706495",
".git/objects/52/4d456e256b1e17778bffcbe50eaca57899026c": "09dc0e4590ac1851c89345574213a24d",
".git/objects/53/963caec1bc08726c3e973135f4931af5e63b07": "fe256d7fd1df186be7e9134b5c34d113",
".git/objects/57/3822cc1bbebbf6a1d21220147cfba89e815bbd": "98c8ba19700d92f90122d0aa9e0d79d0",
".git/objects/57/7637f537081cf83a7b9b8e6e873177ed937f8c": "d6c55f5646ff128a9b323414909f3d76",
".git/objects/59/762be09ac64b8842d3d64aae718c7169027a9c": "3f9de55280e1fc29e4cb3901660ad3fa",
".git/objects/5b/f934063d75bb265b5d1665f738bd7520b06618": "1190bea87899f4fa700a8b6460b1a9c8",
".git/objects/5d/9e55b4a2f9176568d113a2cfa651d206ed9f36": "3a73535b5f313787c7d974468e60801a",
".git/objects/5d/b368b457664794ac0dbe3bd34f81209232e419": "8bc2554a9902e590652ef6dabfc8ac99",
".git/objects/60/8b952a4e72b9edbf9b7fb017b545f50fe8b1f7": "7d8842d0cabcde62f1c234e9e694b0ca",
".git/objects/63/7cd896cdde6ead9248a9a1d4a78679cab53833": "01f00fcc8c294b12d5eb236e3df959ea",
".git/objects/68/893addaa6c3eeeb09f76f7d9c2796dcaa57a2c": "cadaab84c03de508d9906e94117a3878",
".git/objects/69/dcfaf471b48e4cf1e1710f35b23ad0e5b05819": "65694283eba71664a046fc06f0e11966",
".git/objects/6a/f1d1d176bf35d474317a9080946f4fb31f0621": "459c4e388a7a83fd39735de158ab3607",
".git/objects/6f/3e9f8ad4d735907765948db0a04e089b61987c": "66c416a8c6c51671ffce5e09ae42be48",
".git/objects/70/ce08251bdf0e9b55d84984795b0edccfdcae02": "483e7316be18428f0bb1a13c546f5ac2",
".git/objects/74/0d0b0806304ae58386c6a226b656115265015f": "253cce3a4192d43a2cfa0f1f07c1b03e",
".git/objects/7d/3ad480220e99d8b417381499e544f513be81b6": "c8ca11cbb231c932c90fe579b447ba44",
".git/objects/82/f2e073c58c670b7ea996f78e06a7132261c249": "90dfe22bf26d0aa5756682c73c9f199d",
".git/objects/83/e780c1c6fbf011a7c0fc89e07a2b48f4f43dd9": "cb729c151552fbde7b44b91be0e9dbeb",
".git/objects/84/250d8846dab4f64a077e05818ffc80d772bfee": "482f0110e09998b129a1679a6b7cf56d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/5bb2a24c3a79543a894af100161bf1258323e3": "3663d27ef437e534177c6d2cee095e01",
".git/objects/89/de2f5a5318d18beb6c7dad8c97e2d6261bbaab": "ffb4356a90e7db00991112c0c313427c",
".git/objects/89/dfd1905cd9c003114a6c65fc6749870f90f047": "83dac5132b32a8717614bd7e2706abb6",
".git/objects/8a/294307c7ee85a5706ab4229404a76c02d6df34": "6d8a39457d29b78213d0c514a56c809b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8e/babd0c90db03c05719f2af6d25fac2fe064dbe": "4924d7a4e48102dc090d605015aca786",
".git/objects/8f/f49e250dd054bb897c443fad5fea7789efe420": "701a23349c07cf55001dcb7b1ed7a96b",
".git/objects/8f/f7582f7d38843fe46056026740f35f19269759": "f0a58b10f1c430175d0e4ba834f73962",
".git/objects/94/9bb595ad03216440ecc89c63269c00d313b8f2": "8a9e07a43ff2fe45f8238900267f9a2a",
".git/objects/95/885724b72acf3a24f7d38d2e78dee46fa5647e": "e8f8d4b3caa8d3f6ab0a7d760039b40c",
".git/objects/a8/35ff8e0356b9c546f4ddc54fe17d443a8a064c": "b91538fc1c9e19dc355e6c114aef4503",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/0e575bcd6e89e57ed176d67e65c47f108ea47d": "4d50153b3f3e5cde7f0d2618e25fe6d5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/bc/b6e20d259cfd385313fddda3ce598be67821e0": "c5121f2abec73d1d7823a5fe137ca850",
".git/objects/c8/b2f82c40a6c5da1493eb4720f4fa318bdb9011": "9ff826b6736e3706f930944c935942fb",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d9/5520b24c5820c52907a75a524a4d260c55c2fd": "6a01e36c3c39abee6343ae1564797691",
".git/objects/d9/da3fd2d29bee7e0ec794eed448bde3bde20fe8": "a9f6b870daf9ae75e1d7f39cc4f1fe9d",
".git/objects/da/327b28bcccac54a806228a9b7c1857810a5bd2": "1ce92f49cf10c70870506b5068a45499",
".git/objects/e0/6a3fa6889722fdbb8b5e87cc7bd23c6dfe3226": "47866268c0e367a3cf5ce26e8087ca53",
".git/objects/e2/9402af1d00f9a27a15622b405739cf43c09d05": "307fbcf0911a8b822fb023c692dd948e",
".git/objects/ea/853fde9cc7ed6fdc8ae913f174dce8183b31fb": "43eeaeb13f35b8fd059653e642f46692",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ed/48c219117743c47bf97e23fe226504b2b1742c": "2a2f97087cf75d7b3d93697964c52131",
".git/objects/ed/c401dc9f928c4729466d1d1a7bccc36217aa4e": "2a713d30bef422691832c5792853caa3",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "4e8a5e8c874ac90056955f3dfcb153ad",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f4/35e3408f78e1bab297afdd89ddf8eac6bf871e": "e5fa70e1f9e41306a34f0cb7a354e552",
".git/objects/fa/e71342029420b174b47305219eef54de868e46": "bfc664f6aca2c84799fd6f7281c1c8d9",
".git/objects/fd/b5be7dfb12da0a83552f81505aeb4f1cc7f01d": "f2674ba3bbc88e8faf031b04fa576c21",
".git/objects/pack/pack-fb60ab05ac6acaabe43839ba6b5ff812c306b4ba.idx": "721874de5968b06618870ac12763d580",
".git/objects/pack/pack-fb60ab05ac6acaabe43839ba6b5ff812c306b4ba.pack": "c7eb96123af6e25405512a9c79dfd02c",
".git/objects/pack/pack-fb60ab05ac6acaabe43839ba6b5ff812c306b4ba.rev": "ab1b0e749974907f23c0057124dc8eca",
".git/refs/heads/main": "9829a4cf702c088aa666590402f91b65",
".git/refs/heads/master": "d26849e829d09ef5889795fc254972d0",
".git/refs/remotes/origin/main": "9568edda02860946cfd27322f93c01ae",
".git/refs/remotes/origin/master": "d26849e829d09ef5889795fc254972d0",
"assets/AssetManifest.bin": "10fab82e39d0c2f58b5ad9ef9a156b61",
"assets/AssetManifest.bin.json": "997cd50474065c58b1233b91667b6bd5",
"assets/AssetManifest.json": "f4a5743af4d2fd61c5b6c71afb7c5318",
"assets/assets/banner1.png": "3410521ad82a0de62ca637c68527a789",
"assets/assets/banner2.png": "9d6e27dd70bf3a7cf190439981849327",
"assets/assets/barcode.png": "25327d4067a3fafbd252a2e71957f141",
"assets/assets/HomeDisplay.png": "e7f3f2bdf9da64871e1f1942841ad0f2",
"assets/assets/logo.png": "268f82ac9f4d7f8c861174d7d7b0dfbb",
"assets/assets/Rider.png": "0d7cdb1123bde15e7bd402dcc9805c25",
"assets/assets/Ticket.png": "5cc5919bc5fc6739007e787816dca1f6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6f3b03316f3384b9776b7c2c154febb9",
"assets/NOTICES": "45860e3e0cd06873642f294816bc072e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "9a39ab8aa3d828142935da9efe99b3a2",
"canvaskit/canvaskit.wasm": "afdcccf150b5cba228e27c813548b842",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "43ec75ce562f82c5dc5be1a738d87e37",
"canvaskit/chromium/canvaskit.wasm": "3909da2fbccad1a2e4a1f42750d24977",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "0b8baeff2b4484d2d6be67a7e082f9db",
"canvaskit/skwasm.wasm": "ee4afa1790abb925360fd9519c5194f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "85daab2ada7c93d371465c1db5541544",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "25ecc56354d8188e3befc7ac9a6de3d0",
"/": "25ecc56354d8188e3befc7ac9a6de3d0",
"main.dart.js": "b815f371cff0fd91505bb52217be85f0",
"manifest.json": "21f35c2d6c3733df9da1311e3f33aef9",
"version.json": "a8d3ba51bc9b572d2906450c191638ce"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
