'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
".git/config": "cc737d65e571254ecef7319372c09ae0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "059cfff794ee981dd8830365649d5073",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "269b0597fb3dc0e9e78592408f787893",
".git/logs/refs/heads/main": "5543cdb01a58d8e9f3ecd1b36204846e",
".git/logs/refs/remotes/origin/main": "99646d45a5b562ad719850a42ca25874",
".git/objects/03/7d1d3d885db6df956c0fc5ed11cc6800becddb": "ad04be27076c1c2d2d7a80467dfd7513",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "e105e618ebe72cd32bb8ffbede8c4bf6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/09/3da06d1a1cb3fe7541cafee45494afa9ff560b": "7b5795ad56ba9348fde41dff4136608b",
".git/objects/09/f7aea82c920c126c5610c8a105bf9d4863fd1d": "9f7231b405f4ba0c01c305b6f334e688",
".git/objects/0f/2025ad276a0c87a44faeba144179da7ac985c1": "8fd4d002d1b91b664cb208f76a34b798",
".git/objects/10/bc2b66e797a8ffde4e285ed4948cea3e3e3d8d": "bded091989263881f5a5fd244950c577",
".git/objects/1a/b35bec75571a4cb99ecfccdb2782aff9e82140": "1b26bdb9056fe7e54d8c8b6d63140319",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/23/32b7d25c26bebaf42045ffbb22173dd33706cf": "694e2b1f10bbd10a8d93839175561e08",
".git/objects/23/6bfc1b0f9c0648c338effb34fadfcdd0306ebe": "892fc18900ce75c4e98f37bdaaf4111b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/2b/31c26bb0226a2288eee877f8f6f25c44e3a20e": "bd7e85ef4aaf2897e74d5f5bea83bca0",
".git/objects/2b/8b4141a995373cb395660f40e5739d072c3e45": "9a5c86e8b94ed7bfae3ba8d5ad24fd99",
".git/objects/32/b5938acea919e32f82483cbae237a3365cafdf": "5a43e4454d3ae01b992c07d2591bcb6a",
".git/objects/41/3d1de9e8ff932868d3eaf33c76388e06c4b490": "f4644d04acebce58f12b9be85baaf134",
".git/objects/41/c9c23efaac74ce44c0fd94f0afddbf27251b83": "7ec5148efe31f61182cf4412bcc90df4",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/4a/87b6d54def31e1760831e8baa1683f72d57eea": "ae152807ec21317c8bf1faead4b9b00b",
".git/objects/4b/a893205ce0dff043abb20fb526348cc0d17156": "a79a07b96fe34a317c8b5d7fd7b6a485",
".git/objects/4e/4e4caa1e8f33461b3d59a448cde3c6fc4a9b50": "286195dfce51ea407e2a6b28c2253998",
".git/objects/51/ad6d8dd2cc868c39b949245702d5c87c0ee0fc": "35b021a5a11b4bbf65ee41b7f1f8b961",
".git/objects/52/4d456e256b1e17778bffcbe50eaca57899026c": "09dc0e4590ac1851c89345574213a24d",
".git/objects/53/963caec1bc08726c3e973135f4931af5e63b07": "fe256d7fd1df186be7e9134b5c34d113",
".git/objects/53/b3ac2d0f827f50f51f34590e9ad446864e27f8": "6e41973fc8e97f062f40ba3374990eaf",
".git/objects/56/446d758f3837e76a5534e1cd6c77f936e778ed": "b4f2cbb72e18b6fa7138e18e4a38dd1a",
".git/objects/57/7637f537081cf83a7b9b8e6e873177ed937f8c": "d6c55f5646ff128a9b323414909f3d76",
".git/objects/5a/7413722dc7126fafe8abac659a0f8248e81f8b": "d9118c1d0e0c9a75262b9f3d3397797d",
".git/objects/5b/4b37f410e5b1b8db38bd2698be29ec691bf175": "c2a3fe1db30d31d06fd85926620811a8",
".git/objects/5d/9e55b4a2f9176568d113a2cfa651d206ed9f36": "3a73535b5f313787c7d974468e60801a",
".git/objects/5f/9ec38080b265b9e490bf5dc987f31f0fc7b1ea": "73fa3ce9fff45af713bbc5569a7a0116",
".git/objects/68/893addaa6c3eeeb09f76f7d9c2796dcaa57a2c": "cadaab84c03de508d9906e94117a3878",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "c04d0bcbee109da1b68573e9237d1b84",
".git/objects/6a/bcd3d99a166bf82492f68fa1174053d2074641": "0f0b4dc71517907ef1eafdfaf63a2905",
".git/objects/6c/3e0363894e13969ee7556064d87079eac2c2dd": "ec15fd6a11642b50a46d753a7967b39a",
".git/objects/71/fd40938d0f91b360f597b00925699fc1043380": "33ec14561a44a3bf9106b3f31fd1f4d7",
".git/objects/72/48d3c40f35494081170e4fe6e6e24b115199f4": "46523fcaf67a4cbb8b24ab5dc2d1ac71",
".git/objects/74/0d0b0806304ae58386c6a226b656115265015f": "253cce3a4192d43a2cfa0f1f07c1b03e",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "aa349e87e38ecb9e74631648723c84ec",
".git/objects/84/250d8846dab4f64a077e05818ffc80d772bfee": "482f0110e09998b129a1679a6b7cf56d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/5bb2a24c3a79543a894af100161bf1258323e3": "3663d27ef437e534177c6d2cee095e01",
".git/objects/89/dfd1905cd9c003114a6c65fc6749870f90f047": "83dac5132b32a8717614bd7e2706abb6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "6db9ef87f25d1bcf0e7bea48b7fdf817",
".git/objects/a0/e1eec861559743510f15fc53741b310677de29": "acf5e33a80d5c5a1941b1b4255a8369a",
".git/objects/a2/38a05a6c12867fe204f8783307107e18ba1cbd": "4618ce9707d93914a97db15d311ffb49",
".git/objects/a4/2396a84d7e4ada237faea76adcd072d12193e2": "2c8b5b50c10218761a6c7551270ab74b",
".git/objects/a5/500d1ef72b7eef79286fd16930b516c1575da8": "bcd4a63209256a0d8322f5c66d021876",
".git/objects/ac/bf7cfbe57a05f4ff61e61b90dbb71fa814c1cb": "5689e9d459e41dce3ab6dc26707e78d4",
".git/objects/b0/1b07e39332b0a841526d2f45eb2f8cfe82292a": "2c5ca59095e582ef3f54d4deac6938cd",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/ac5cf493b85b1b4561c39b0cf7f0bb8e666a13": "f90a7a0fff00de632f125554c462fb1e",
".git/objects/b3/2815cf268a4d6433fba00d8b5c516615704768": "3abf4f5756e659ff661cd7b3001b877e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/ba/6ab9f52c9696ee79405010c1d0bbd4cd878012": "284b46814839772c5d5b43c705e64e58",
".git/objects/bc/b6e20d259cfd385313fddda3ce598be67821e0": "c5121f2abec73d1d7823a5fe137ca850",
".git/objects/ca/592354554fd137dbb91304cd1c9519358a110f": "a0fa05ec094aabb6de18a3e6bf9dd760",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "bd87a7cf5ea05252e5a8b745c0877738",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d8/6f300c7c6d3f638f41ba0e5ea04fef03edd975": "5db8329d568a439d256a361f0021a740",
".git/objects/d9/1343b4bb02f716f5007a38f9129ccfa7d2186b": "beba42fd24a513769682b1d8847dd3b0",
".git/objects/d9/da3fd2d29bee7e0ec794eed448bde3bde20fe8": "a9f6b870daf9ae75e1d7f39cc4f1fe9d",
".git/objects/da/327b28bcccac54a806228a9b7c1857810a5bd2": "1ce92f49cf10c70870506b5068a45499",
".git/objects/da/89c7cd357bea31c224600e5d5737a1c6c48697": "c6f27ace83efcd874174985398b738ce",
".git/objects/dc/c49e7bea6ca6c72dacb13e4f7d33c175c12d05": "2243c6c63f9e3c53650d452b9a9a09aa",
".git/objects/df/c46570543887904b5db0dc9ee2291b031a30a2": "74143d82f52573d8fec71ba1838e3fa1",
".git/objects/e8/1a7aade7386581192c0119fc814f68fc464f6c": "62d99174bdb605b9a581f1c6db049fea",
".git/objects/eb/9435e4d4656046c28ae086182d9d3040b7e273": "7fece23c73fb531132093ab8b1effd36",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/f0/713f290a8678d5faef38ae7a91f33cfee6569f": "dd963a8fc948cc16e5892a6df3c45ead",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "4e8a5e8c874ac90056955f3dfcb153ad",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f3/37ceae875e38d5bf302ebec6d0600548a430e8": "e0688114dde4669a855d9d784541c5f4",
".git/objects/fc/12666c72ae9de4f8b62f2790926df7a72b2926": "5d0f18568db5b401f04a7726c8ea84d0",
".git/refs/heads/main": "840866303aecc3537cd2386151371dfe",
".git/refs/remotes/origin/main": "840866303aecc3537cd2386151371dfe",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/assets/barcode.png": "25327d4067a3fafbd252a2e71957f141",
"assets/assets/Favorites.png": "8133b07c78a03902f2eebd81b47ac05b",
"assets/assets/home.png": "270b6573f790c3bebb99c58bdc0b235c",
"assets/assets/logo.png": "21116af19d33671d7932e33069d5e921",
"assets/assets/More.png": "48d930f8cbb7a52b85d1211c522a9052",
"assets/assets/Rider.png": "19049d49a6b4af2fe57e943c4cb71b7c",
"assets/assets/Tickets.png": "eb438afe56c87ae8f0976f8a76c78160",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "4d4bc7fd13020acc02aa39809d587f21",
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
"flutter_bootstrap.js": "426ef59128a7ee5d36f692f13872066b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "25ecc56354d8188e3befc7ac9a6de3d0",
"/": "25ecc56354d8188e3befc7ac9a6de3d0",
"main.dart.js": "acb15a6377f5f495b4cc51e83c19a25d",
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
