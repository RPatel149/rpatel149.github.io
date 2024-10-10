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
".git/index": "df61dc06a231431732c8a27029efe049",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "545caf711ae6c7f47fcec6622c87cc89",
".git/logs/refs/heads/main": "53e9f7681d5cff67cb0434be533ea949",
".git/logs/refs/heads/master": "07f80781c7b002eb636ca0addd56a31c",
".git/logs/refs/remotes/origin/main": "65bd8ffb7237896c4ad0d70ba8876451",
".git/logs/refs/remotes/origin/master": "f5513c6e688d08d7d47e69eedfb9399a",
".git/objects/02/5e9fc5bda1be5dfc87b596ad8530befbd7f200": "7d0a2a522ccab42acc93e07f4e09e2cd",
".git/objects/07/3e404c0102f58860d391b4dfcdd0965386b4c3": "fd295a17fc1d983f1c6efd1e3a3eb90d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/08/582d530a26b46484f22dd14f502a2eefbbdace": "99573979128e9b7cc9e670ff39c1944f",
".git/objects/09/850b1e7014438ce9987be5d56f8eaa62275c01": "454e9a9a570ce6c61efd4cc348246fae",
".git/objects/0a/684b3d228ece822d412e809a18258fe45f668c": "42ef84620a5e3b0b951c58ac100a8c94",
".git/objects/0d/e9133ac203d9ea3b88aee1cc511ff6a56896b5": "542ca70eae323f637bd1c3a203832693",
".git/objects/0e/8cce82a655370128157bae93ee5f981456a5ac": "fa937c38e3e7c5c4bbc3e6666604df06",
".git/objects/10/88e349e4cd180c0b500048eaf040d32739701a": "ac08fd86c342cf6c7329b88d2e34cb63",
".git/objects/10/b3b1fde15e9a1057a1505542e838d931938f90": "4151ff252e5a172058d351cde82acd67",
".git/objects/13/838ee3b2fbae1d522662d0874186b66838f80c": "1d4536f1336f7912b08a587dd26ccf1c",
".git/objects/13/f84adcd12a899d7c4af991f27f6bd9abc6a51a": "b28b0539eb950d21000044b3400a0063",
".git/objects/14/181cca391192cdf2f7338892483e79d3ad780f": "f78b36d9445bd724a95670e3149c93b6",
".git/objects/14/75738b9d4d4a218c45d5095a3edeb366670c63": "e5d1fa8452f523cb7ca393bfdd5f77c6",
".git/objects/14/d8fec619c430a3fad7c89aa0e3c52809191b9a": "3c5d7cc68115a8706c6fec8130fb3c01",
".git/objects/16/0068eb355d02178c435d9b93fe252b85752bba": "680cfba8e6ffb84eba390cee1ee0bcbb",
".git/objects/16/5e3763b26b1923c1a9c3d61d5bda88686b4702": "e111c12a95417e72f1516d3888185aa5",
".git/objects/17/3cf5e7094c8b75234aea5240304c16652b30bd": "402f1e436f27e32b6ee85c19b43ffea8",
".git/objects/1d/c0cb0974aaa577804c9b8a1f651373213cbe1b": "6a1d1d4200b7d5ba7239497b72dd0053",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/21/524ab084c8dbe397a184648062bdcb8ca2eb77": "bea90cc53798b99faba53e3020cfd32a",
".git/objects/21/906b31a097a62095f67bbbc765d947244abe3e": "d5be063653b5b917a465bf812d5b4e83",
".git/objects/24/b1a7b07b88e539ee2c86558a3c8d2a5b141f49": "69b2575f4bfb3da8165e79e3015a04c1",
".git/objects/24/baf5734cad04f23d159319abaa4b269ecd870e": "2608444718d4564fc571f7b516d1547c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/25/fe25043e8118b3f390f2f5df134dce10dfb6da": "3347bbc4b20c0c5b3fef04395b2c972b",
".git/objects/28/6a414fb84190f2d7e6a896ca2eb6aa06cde7af": "79e49c99cd3ef57fe7d8fdbdbc67ea22",
".git/objects/29/b7507e8f49ad3ddbabfa5a860eeca4cd4fce30": "504045a1f86c567d995ce7272f7bc894",
".git/objects/2a/dd75eedbb0f849105cfd89af1a027ebde8d3a1": "4ceaf71581f658c6ea6d8d1c57837ac2",
".git/objects/2b/8b4141a995373cb395660f40e5739d072c3e45": "9a5c86e8b94ed7bfae3ba8d5ad24fd99",
".git/objects/2c/cf7b14c40fa54728380d01e4de45013898d602": "1fcbe64803220d0af347fd6c9ceca54e",
".git/objects/2d/3dee102d581fa4f8c0dd8f9e0d92b355ee7ca4": "6169b2af7ba5c8bec33909e08224cc8b",
".git/objects/2f/9e9d44664aeb1cbaca427f0cbd10dbe2da1016": "d3480efa31e0a19be94a6ad5d8cd9021",
".git/objects/33/65981f1cd5762367cf3b40ef9fceb68bdf1aa5": "7a7e7966ecd50dad67b0bb118145b090",
".git/objects/33/78597fe42094084ee3614e83d0126e35f3106f": "5e7e581c2df4958212a26e3f926a3e7d",
".git/objects/34/7e7aec784666d39fd4d515d641d99a58159ece": "29381751c4d5c4ff1ae1a6c6b609cb6d",
".git/objects/36/4a1ccb645f2066b7f38cc47c4915429850324b": "081eed60d19d0bac3cf05ab9809366df",
".git/objects/36/dd393f81b422193ae23ff916cb615be8da2ea7": "c185ba4299cb15c151a2e754c202deb5",
".git/objects/3b/543e4cce0c7c3174da46b8ce9ac455402bcb56": "b21842c485c38f50e7006478fbdd66cc",
".git/objects/3b/fdfb742b368d551cee825b8367c0e913b18c10": "66d9961e43cbc5f1f5598c45eccc9fa6",
".git/objects/3c/6625d425057c878717188451f465b0293fffc1": "495bfa4ef89cc03d80862d485373eddc",
".git/objects/3d/019e3cdfc96ad5913410ba5b37aff826ff8d36": "24504559039bbc16a07da81817fff86e",
".git/objects/3d/214a05327bf42ca44a8c9a43f9fd9807cf025a": "72a1178b991c9ea906ad4a2900543af5",
".git/objects/3f/2a191468c168eb0a0a0afe321000ebbcd69d76": "43bec8e54514a0ec1d74cbd2e0b09cee",
".git/objects/3f/f180a034c33dc849431ccef46a5be64cf9a7a4": "ea635f53edc3e95b34bedd92fe356ba9",
".git/objects/40/47f8709e3e25c1ceff7a159b61e750a120af7a": "1ae96dfe39fff314cf49efb15ad3b24f",
".git/objects/41/a7ec0f0ecb5c82355133c6e76e736a0536aa54": "ecb21863e1e77622d86afdaef9fed7cd",
".git/objects/43/a756812f5f348e938d72e1fb8cadb7b73bd57e": "c25023cfb3691ff62e3d4d6e6c01aecc",
".git/objects/43/b31b9367759d2dad3c2455ec3734fbd89f803c": "a38062384c084ded69a1098201ed17da",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/48/1891b1a6562960c5f14aa163062108c035360d": "b6a3ed7b48b7f510875d31f857033c87",
".git/objects/4a/eed2dcc6c213a819346b3a2f1bcc5cbca23e48": "2813eca18ff9b8cbe477ebf8df12301d",
".git/objects/4e/1702567128cfa3ec078904f922f039e91dee92": "9780fe31f681431d41aedc5cea706495",
".git/objects/4e/51d837fbb82f7516cee2405373f71828ff9aa5": "62e962a71ac3511184fc7e584514b763",
".git/objects/4e/b5bb22bfa1e917d4df97833b85a3c85c571c78": "b7a65a9974eafce96ae52066f27374b6",
".git/objects/51/891290cdbdb13b56d4de5a29212f10ff7bed12": "8774dc8b652a7a92ccdbc24bf9489d9e",
".git/objects/51/d3a7d2326e18cc0a3b7ee575d21966c801eb45": "0a34149d43d9fbc380d85e8506bc77f4",
".git/objects/51/f37a4242b5fe68480952f266be40789caa4e9b": "dc7d1530ffb1567208f0cec412d0def2",
".git/objects/52/4d456e256b1e17778bffcbe50eaca57899026c": "09dc0e4590ac1851c89345574213a24d",
".git/objects/53/15496c54687bf55064ee735736f7f2a0c3c128": "c2c046e731829c18520348a839da93d9",
".git/objects/53/963caec1bc08726c3e973135f4931af5e63b07": "fe256d7fd1df186be7e9134b5c34d113",
".git/objects/57/3822cc1bbebbf6a1d21220147cfba89e815bbd": "98c8ba19700d92f90122d0aa9e0d79d0",
".git/objects/57/7637f537081cf83a7b9b8e6e873177ed937f8c": "d6c55f5646ff128a9b323414909f3d76",
".git/objects/57/be28a05284b6fc2b7a1b31c2c7569f14c10a5a": "8342da8516e10379f2e50a9d52b29e15",
".git/objects/59/762be09ac64b8842d3d64aae718c7169027a9c": "3f9de55280e1fc29e4cb3901660ad3fa",
".git/objects/5a/a6fd4cdbb2a6e12386241840859bb8a775a9dd": "bf0c746088a7843a5383a46344065f71",
".git/objects/5b/2131e63aeb60ba715a18ed455f65145bef3b56": "e192223a960ef09d2a852e0e127737ab",
".git/objects/5b/f934063d75bb265b5d1665f738bd7520b06618": "1190bea87899f4fa700a8b6460b1a9c8",
".git/objects/5c/2b1fcdb5be77c5e7d4ee96a923ee1fd71994e4": "6821305085950bf698fc5e095dad3af4",
".git/objects/5d/9e55b4a2f9176568d113a2cfa651d206ed9f36": "3a73535b5f313787c7d974468e60801a",
".git/objects/5d/b368b457664794ac0dbe3bd34f81209232e419": "8bc2554a9902e590652ef6dabfc8ac99",
".git/objects/5d/d07993965278d071d6ddf9d580906945ec2ae5": "b1f2934113445a41f138679ec807821a",
".git/objects/60/8b952a4e72b9edbf9b7fb017b545f50fe8b1f7": "7d8842d0cabcde62f1c234e9e694b0ca",
".git/objects/60/c98f08a58ecbd2359917b621196e1810f5a65b": "f2c66f183237075a9d8c34fa33a6f086",
".git/objects/63/7cd896cdde6ead9248a9a1d4a78679cab53833": "01f00fcc8c294b12d5eb236e3df959ea",
".git/objects/63/8932dbcfbcb2d91864c7e850e9b6d09d5c4792": "4d932d794cdb677242b743b1f8108b01",
".git/objects/66/a06d66e332eaa6cdf3ffa456dbca7279e07b80": "0dd41bef9671649038d32b3e86facc13",
".git/objects/66/c7f86741995da0cfae703e015d03f6ed166d73": "d18a8a285574d916feeece3c9beacacc",
".git/objects/67/7d2a1ebeb24da072fd2b54a21b773d77ab4206": "441a4e04195f4018ac88bae0465ae7da",
".git/objects/67/81193e661a104070467f482a55ff874e335c9b": "51d2c5d6206544789e3ce0778e61e1fa",
".git/objects/68/893addaa6c3eeeb09f76f7d9c2796dcaa57a2c": "cadaab84c03de508d9906e94117a3878",
".git/objects/69/dcfaf471b48e4cf1e1710f35b23ad0e5b05819": "65694283eba71664a046fc06f0e11966",
".git/objects/6a/f1d1d176bf35d474317a9080946f4fb31f0621": "459c4e388a7a83fd39735de158ab3607",
".git/objects/6f/3e9f8ad4d735907765948db0a04e089b61987c": "66c416a8c6c51671ffce5e09ae42be48",
".git/objects/70/ce08251bdf0e9b55d84984795b0edccfdcae02": "483e7316be18428f0bb1a13c546f5ac2",
".git/objects/72/96c28558724545a6459282a31d819529ae0568": "7d52aceb62b1041a3887dabacb95cb72",
".git/objects/74/0d0b0806304ae58386c6a226b656115265015f": "253cce3a4192d43a2cfa0f1f07c1b03e",
".git/objects/75/5417e682cbb1907225b7e306e8cd104109b2a6": "87af190d10b4dc1d1ebadc980d9be370",
".git/objects/7b/de060d8460be45c807d0828e36de4daa57ee77": "4e6a1117c12f27eaff57ddaf643117bb",
".git/objects/7d/3ad480220e99d8b417381499e544f513be81b6": "c8ca11cbb231c932c90fe579b447ba44",
".git/objects/7f/1b99ca6bb5e6db2b1d0fa5dc91ab2e98a9df96": "87a52cd12f55efd4da28b27f5e06cf0b",
".git/objects/82/cec390b62c1dfb11d47acfd59da1cd8d283871": "44133fb2a932a5b2c661e3aaee38b654",
".git/objects/82/f2e073c58c670b7ea996f78e06a7132261c249": "90dfe22bf26d0aa5756682c73c9f199d",
".git/objects/83/e780c1c6fbf011a7c0fc89e07a2b48f4f43dd9": "cb729c151552fbde7b44b91be0e9dbeb",
".git/objects/84/250d8846dab4f64a077e05818ffc80d772bfee": "482f0110e09998b129a1679a6b7cf56d",
".git/objects/84/f15f33450500a382f6d2ecda876e43f5717c0a": "540c114fdf6e4ad8a51ea5a95ce57585",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/86/630edefdffa9bc983b3cfe1aaccab71a6bfb66": "a8fdf13cd5522d9a65bf970a8b67216e",
".git/objects/88/c14bfd66d3f14c35a10e8cee9ffb99b93c552d": "6b67e9aa3e49ed6d7912d3f3753f180e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/5bb2a24c3a79543a894af100161bf1258323e3": "3663d27ef437e534177c6d2cee095e01",
".git/objects/89/de2f5a5318d18beb6c7dad8c97e2d6261bbaab": "ffb4356a90e7db00991112c0c313427c",
".git/objects/89/dfd1905cd9c003114a6c65fc6749870f90f047": "83dac5132b32a8717614bd7e2706abb6",
".git/objects/8a/294307c7ee85a5706ab4229404a76c02d6df34": "6d8a39457d29b78213d0c514a56c809b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8d/36e879d09648b33b5725f9d6033c2c0fae303f": "ac7125bd12f1200fd02c1ed6897ade0a",
".git/objects/8e/babd0c90db03c05719f2af6d25fac2fe064dbe": "4924d7a4e48102dc090d605015aca786",
".git/objects/8f/f49e250dd054bb897c443fad5fea7789efe420": "701a23349c07cf55001dcb7b1ed7a96b",
".git/objects/8f/f7582f7d38843fe46056026740f35f19269759": "f0a58b10f1c430175d0e4ba834f73962",
".git/objects/90/2ea6a45e95f6356fa24ebf29c62eec4fa704fb": "bb832eedb2f339497852cec0114b0354",
".git/objects/91/71fe2d098a7539a9dfaeac45d7ffe1e94c4b1e": "96b97c1fa3f6aeddd6f33aa14dd31cbc",
".git/objects/91/e796effb22d375ec788ab2c44d421a893bb83b": "24b26a128c87d465ef75c3280738f559",
".git/objects/92/8f9b1566aa667d82f090683b5bb5fcc64e7a4e": "71aa3867c5d6c81296ef9142f3ca3a4c",
".git/objects/94/9bb595ad03216440ecc89c63269c00d313b8f2": "8a9e07a43ff2fe45f8238900267f9a2a",
".git/objects/95/885724b72acf3a24f7d38d2e78dee46fa5647e": "e8f8d4b3caa8d3f6ab0a7d760039b40c",
".git/objects/98/9076bd555429c96d6f20b68373612b0adf7b3b": "1b47bfc0ee3b24496772ddc2ea0a4ca9",
".git/objects/9d/f71ead8d6a8a5d1257abf15669d62a954ef898": "a59bb5e55092b3e91b8fd70c7ea90cf1",
".git/objects/a0/64140e111891104ed0b07246949129452a24a2": "e67917fa97abfcb60a36814e68a35820",
".git/objects/a4/69b5c7a632ca1484c999f8b2ec44fc23dcb53f": "19150adfa97bfc68b84c5bec7651cd63",
".git/objects/a5/200279a7bba37e91eb89101e81e0b0ba3725d2": "a56b3ea9c5dcc62ca1fa5d49aec35622",
".git/objects/a6/3de2ac5ea5a65488349e1851b8d1a97d292ca2": "bc84a64cb2465b39ed672d9ae21eff44",
".git/objects/a8/35ff8e0356b9c546f4ddc54fe17d443a8a064c": "b91538fc1c9e19dc355e6c114aef4503",
".git/objects/a8/82b40be9a4140a3858e7c8dd2ce4a2805f54f5": "3858431df500819f49ae149138457eb0",
".git/objects/a8/a1471141f2bce680c826ecb86b3a20ef3cb87d": "28a4f6867dafd2f99594dfb76988441b",
".git/objects/a8/cd6b8f9baae907d70d1ef910df2e2d3f85c756": "81e1b4f9f0ee5bf3f5390a3b8e31af3e",
".git/objects/aa/8c63377e4716261665604b933b498526f77a8a": "9e7f336198742fb790450e111c239174",
".git/objects/aa/e1667a1d0882ad397768166e712c147e06988b": "c692907eb2b0b080e4c33522bf9ab17c",
".git/objects/ae/249011c59219c622d4b2e13ffe39554a0caaaf": "6de1bf51edca6cc871169ee1a63893b1",
".git/objects/b0/284107c06b2c9785c1da1a008a92bd68dcd238": "d4ea957b9f3c9c387059030277438741",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b3/78e1e055f9d1c029c2c9bb6e95e02024a2c11d": "1c82f609b02f0603655fe4fc6ce16baa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b7/c86fc87bff7064f9ff103ecd80c03eef95f78e": "e04c755b2411d385aeb97b27792cdd3e",
".git/objects/b9/0e575bcd6e89e57ed176d67e65c47f108ea47d": "4d50153b3f3e5cde7f0d2618e25fe6d5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/ba/f05f606a269c3681c073e3d1f4fa0bf22a4417": "b62d345adc521a772a080d9c9755a3ab",
".git/objects/bc/b6e20d259cfd385313fddda3ce598be67821e0": "c5121f2abec73d1d7823a5fe137ca850",
".git/objects/be/de11b29e55f3ac5758aa4e8f8bb138a9370515": "6f5fcf26363970b95c478c79dd497108",
".git/objects/bf/25e23f3c0e1ca6e7d47e93ac72bc547be2a585": "a38c1240cabc83b2241fa0d44f9f0e8b",
".git/objects/bf/9743003b3971e5a79af4508abcefb294eaf487": "0d6ffc629ce4984e85902bddcdaaa6a0",
".git/objects/bf/d8a939a7c7e1de0171b41b32817b9334186293": "ff740983b55438459a53d4e8143c5d35",
".git/objects/c3/c41f15cf66d328224ba61813fa318c7a20257d": "ef3f8a603b5126f024c3d35c05b71070",
".git/objects/c5/6e28c3f0004de8ff7b52c1d1d6f9a995767457": "596c09feb9ffd6b9c52cb47f284eceb6",
".git/objects/c8/b2f82c40a6c5da1493eb4720f4fa318bdb9011": "9ff826b6736e3706f930944c935942fb",
".git/objects/cc/ed4ec5c2a52fa4d8d160dc015e05186272d760": "92bedd8364d5d68b1502ef44ddcaacfa",
".git/objects/cd/1db845a8614a85ed68dd4ccdd46f6f7c6ff1ba": "2ae18ff00d9361b0c883e798aee257a1",
".git/objects/cd/21fc26aff16311bcd417f607fab5608b5b2f79": "6f899d47fb820d3748bb94fbf8081ffc",
".git/objects/ce/632c95fa9153ca5e7c56d2785b852a65d1bb5a": "575c3369d62d662e27083dc7c36f39ff",
".git/objects/cf/85a4954e864ac7efb78d70f7f2c774e1f54c5a": "0ec3aca16fa3ed2cd9972f9006cc0077",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/d0/29d1754eb1ed4a4bcb6acc97c91131123088fe": "7de108c9a69e308fc2f42b99aa862892",
".git/objects/d0/de5109278e626fcf08de9ad7eb153f7ceef24a": "6323780e6423412a12e05c26abd0827c",
".git/objects/d0/ee9515bc20a77c6de5e573a76a3c4bdedda91c": "6921c1e541bc0905a38e9eee6fe314a3",
".git/objects/d2/933a86af9e26f86e1ea576fa9aeb1bff361472": "46e492cffda88601fe023b9a513e0c5b",
".git/objects/d3/1cddcc68a3a79912f619e9a6fd239bdf3c9c21": "2cca23e9d4aafafe3268e6c6bceb629d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d7/1885218348ad6b099545d048c176c83f57598c": "1ccd944c14ae728406d6aee82ed1b6da",
".git/objects/d9/5520b24c5820c52907a75a524a4d260c55c2fd": "6a01e36c3c39abee6343ae1564797691",
".git/objects/d9/da3fd2d29bee7e0ec794eed448bde3bde20fe8": "a9f6b870daf9ae75e1d7f39cc4f1fe9d",
".git/objects/da/327b28bcccac54a806228a9b7c1857810a5bd2": "1ce92f49cf10c70870506b5068a45499",
".git/objects/da/ed81e9c67ade1f0baf5d84c35977167312ccc9": "7a19d3f65263a38e17e9db5db348959a",
".git/objects/dd/840cb64fd41a8125049faba49914506bcea8de": "c0d8100727673c4d1594ad8f616a81d3",
".git/objects/dd/bf756db2f9f8bc9adc8b5de6f404d5d6ffc420": "393a7b6b785d12c3293847133b243c6b",
".git/objects/df/ae9a2b901012bf2547acabd72a784efdf2f978": "c58e113eb8ce447882c899e09e1a9b7d",
".git/objects/e0/5519c48137bb609ae67bc69e732209a58df0e0": "0609e2b86f74c717829f848a4b4ce22a",
".git/objects/e0/6a3fa6889722fdbb8b5e87cc7bd23c6dfe3226": "47866268c0e367a3cf5ce26e8087ca53",
".git/objects/e1/8c21ee8ed6a39290f9c56845268c61e5b93e28": "b8127b77c896327c81d9059b709ea812",
".git/objects/e1/f2002888018ab288c58bf6c7644c4f86c4e04c": "39898de3d5f71b321ce84f5eea93dd8b",
".git/objects/e2/9402af1d00f9a27a15622b405739cf43c09d05": "307fbcf0911a8b822fb023c692dd948e",
".git/objects/e2/f091450840aaf69d08442cc4f18df651775490": "9a3577735c889857192e78290d995e1f",
".git/objects/e3/01e36d70eb56044d934dd049ccfe3bf582daee": "6bce3aff541c823e540287fb0b9d7135",
".git/objects/e7/0e95b1c2ada481e84be12ae09c0ea5f5e94ea1": "70465b316207d3e22b2039f5cbe520cc",
".git/objects/e8/205052de3f9e6323de1bf4cd3d8160ae0c1164": "af63f601ef3fb30fe220a5cfa6a1b3ab",
".git/objects/ea/853fde9cc7ed6fdc8ae913f174dce8183b31fb": "43eeaeb13f35b8fd059653e642f46692",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/0bf2cf46ca041410a8aff289281088bd4d55eb": "00d51ed4ed64266508da3945c0a78197",
".git/objects/ed/48c219117743c47bf97e23fe226504b2b1742c": "2a2f97087cf75d7b3d93697964c52131",
".git/objects/ed/c401dc9f928c4729466d1d1a7bccc36217aa4e": "2a713d30bef422691832c5792853caa3",
".git/objects/ef/2aa49a737619a6e81980b533d24eaccd94353b": "b3c9cdb351ca5934a0d50b2c51787ca1",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "4e8a5e8c874ac90056955f3dfcb153ad",
".git/objects/f1/e55e19111b90de2be9180dd04c5032c297ce93": "0b37615a0456888eb24d4095b5777367",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f4/35e3408f78e1bab297afdd89ddf8eac6bf871e": "e5fa70e1f9e41306a34f0cb7a354e552",
".git/objects/f5/b4fb1354074462b8eac56a20e05c6662cc9415": "3b2806cd5e3a3d9eaa0139a7225ae205",
".git/objects/f7/19810a2191eae883e8c6875bf5bed8833f7a1f": "975167273fc530dcb5324a446c098a9f",
".git/objects/f9/38ad9aa39963e4b434e1b5766240843dc5717b": "bcac51bf0c6c06963ed746291f0b3499",
".git/objects/fa/e71342029420b174b47305219eef54de868e46": "bfc664f6aca2c84799fd6f7281c1c8d9",
".git/objects/fd/b5be7dfb12da0a83552f81505aeb4f1cc7f01d": "f2674ba3bbc88e8faf031b04fa576c21",
".git/objects/fe/d73f86cacee4a8741786ef12c6a9d5f0e611b2": "13c9d31ae166fb17749fafbc02ba1722",
".git/objects/pack/pack-fb60ab05ac6acaabe43839ba6b5ff812c306b4ba.idx": "721874de5968b06618870ac12763d580",
".git/objects/pack/pack-fb60ab05ac6acaabe43839ba6b5ff812c306b4ba.pack": "c7eb96123af6e25405512a9c79dfd02c",
".git/objects/pack/pack-fb60ab05ac6acaabe43839ba6b5ff812c306b4ba.rev": "ab1b0e749974907f23c0057124dc8eca",
".git/refs/heads/main": "ba1a2ace5e34ae17f8506ee4efe75c6f",
".git/refs/heads/master": "d26849e829d09ef5889795fc254972d0",
".git/refs/remotes/origin/main": "ba1a2ace5e34ae17f8506ee4efe75c6f",
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
"flutter_bootstrap.js": "27474990c23d5784fb626ceaa8cec763",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "25ecc56354d8188e3befc7ac9a6de3d0",
"/": "25ecc56354d8188e3befc7ac9a6de3d0",
"main.dart.js": "e4f5ef4edad4122bd67450d2f4e897a1",
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
