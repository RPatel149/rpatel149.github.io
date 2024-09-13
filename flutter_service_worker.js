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
".git/index": "f8126e8570f0073bd76a81ab085906de",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e58e1220fb1a6d964580828a86719f85",
".git/logs/refs/heads/main": "4bc9a692930956da38a1eeb5ad410cf8",
".git/logs/refs/remotes/origin/main": "79cdd51f3831de3af8bea58e68bebe36",
".git/objects/00/03b789ddb6da9ac5fb02fe7c81d559d01f0a92": "85c71a7d589bf959dc722c4eba063bf8",
".git/objects/03/2d14c9f2ceba574724b91571ee00c258141c52": "efad86f27c7c3ee561b93f989f1c7b4d",
".git/objects/03/70d0a05ccf91378696e5312c527f30def02474": "d20d17730a3631daf2e49c217b8acadf",
".git/objects/03/7d1d3d885db6df956c0fc5ed11cc6800becddb": "ad04be27076c1c2d2d7a80467dfd7513",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "e105e618ebe72cd32bb8ffbede8c4bf6",
".git/objects/06/d6d4d8bba412d85ae461526d17c43cf01da8fa": "065251b4d3aeb48c8663032007beb440",
".git/objects/08/19f70cf57d6ed1da0f501bc5885eda42a87a37": "08161b076f264cf937ded8367517eed8",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/09/3da06d1a1cb3fe7541cafee45494afa9ff560b": "7b5795ad56ba9348fde41dff4136608b",
".git/objects/09/94f08ff164608f3ddbf80095d4b54c60065202": "7d60e728ffad5350fa318192535fcacd",
".git/objects/09/aaca9fcc08ccfd0666b128a23a3ba6066757a5": "aec485395bcd1e8181bd7872fa074713",
".git/objects/09/e2b32e7b34a651fd97cc64da9de366d91bb6a3": "8c2b8834436cf528f3c35d9b686cba88",
".git/objects/09/f7aea82c920c126c5610c8a105bf9d4863fd1d": "9f7231b405f4ba0c01c305b6f334e688",
".git/objects/0a/c66cde03b1edb4300a3a3e1be97f57e342763f": "ae09520f70b0ba802116a91e1f383ac3",
".git/objects/0e/5a7b036938ee4db7654247b49b98b268ca2694": "a749cc885fdba558f0bbb318106ad119",
".git/objects/0f/2025ad276a0c87a44faeba144179da7ac985c1": "8fd4d002d1b91b664cb208f76a34b798",
".git/objects/0f/244730f1072335f134ceac5f3587ab159ef94a": "6c003db52207bac54b9f544f88795f57",
".git/objects/10/1fae07292a319ca73515b1bdbf6bca7faa1dca": "d057714ffd1d04934d9985a41eac93e7",
".git/objects/10/bc2b66e797a8ffde4e285ed4948cea3e3e3d8d": "bded091989263881f5a5fd244950c577",
".git/objects/11/b64bed1f212058023b7096bcff0432ed1242e8": "9378055dbca35c9afb39bff67b4dd6d1",
".git/objects/13/2b1074565d0a960bc77671ca76cd52fa581699": "6cc741409bbf5494b90d30ef225ef7e8",
".git/objects/13/f9fe699f5f5470cdb11b856737a8ad210dfbf3": "505a30b2bb5aa359ecf539a79756d736",
".git/objects/14/38fe9392bc2ce9794673e052b64726bda19025": "4d0bdbb0d71341d307f3adddbd75275f",
".git/objects/15/1fc8ebb05dffe8ae774ff973f8e91b8ffb2616": "e18df1309169f91691a3322006da5f02",
".git/objects/15/6a9e8fb797d373680ff6fdfc705e9735e5291c": "dfbc5ea2338cc6af1abe81df295c13ba",
".git/objects/15/fad16824b076b3145a15938f6aa43ae7aa2d6b": "c9b929ed45d4bea3a25189f63108ac33",
".git/objects/16/69614d1f48f5a7715cc981b25c5f6117f24a26": "9cf121f32beadb1aedf103d7752452cd",
".git/objects/16/9028298d3910b9cc9a1458ade3ec2741f072ff": "fc4a654ac19f9166746aed578bc20197",
".git/objects/19/e0165f4eca8ce4f6a8b0b037333031286dc459": "1578514c8fc6a4ad0dd625ef9fe66126",
".git/objects/1a/b35bec75571a4cb99ecfccdb2782aff9e82140": "1b26bdb9056fe7e54d8c8b6d63140319",
".git/objects/1d/0e3d0e941c7dc6b650a105b9de4702091852d9": "ee6f2d67e9c49bfc38bb536750a3b6b2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/1f/d72b41ac8a6e7b1b0f45d449a374aed4ecc385": "3d0f1ec2cef93a5960261c7e12b066df",
".git/objects/20/7026768e5d5629bba8881171647cfde48fb0e8": "f3f8bdca9724753bbee6cca3d184ffac",
".git/objects/23/32b7d25c26bebaf42045ffbb22173dd33706cf": "694e2b1f10bbd10a8d93839175561e08",
".git/objects/23/6bfc1b0f9c0648c338effb34fadfcdd0306ebe": "892fc18900ce75c4e98f37bdaaf4111b",
".git/objects/23/86b8abed2948116561e10532116d284d201774": "d6e6cf3f0dfe0677d8521cb6feee95d3",
".git/objects/24/835c630b8f3750208f231f9b51fddcf37db550": "fec1bb058a44b52e60c522bc4dfce564",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/27/e2e189e25752212734b5adba6f4cbc911eff76": "6bb3f6c871292c99d52547e2d3e76962",
".git/objects/28/65d60f7c17cee47291576355487b22ca950150": "ebb6d000c0067de59dbbeffb7612e492",
".git/objects/28/feb4d93ac3105cc2e3ef5c9fb3806a29c16a2d": "cf58cc11866d2ef04db19355d0aff84f",
".git/objects/2b/31c26bb0226a2288eee877f8f6f25c44e3a20e": "bd7e85ef4aaf2897e74d5f5bea83bca0",
".git/objects/2b/8b4141a995373cb395660f40e5739d072c3e45": "9a5c86e8b94ed7bfae3ba8d5ad24fd99",
".git/objects/2e/c88a74daa2fdbec3d2b5918ee95cf8af2206a7": "1ae854a177ac33e7e5d77f29395857a8",
".git/objects/2f/2688fdb2c542c9fdcd8b85b5b1e0f35492f619": "f499953440c08969203e00c15367537d",
".git/objects/31/ca8261f02097af16741937609bf05b10252377": "1faa8cde6cba1b0a31804dcd1bace9ef",
".git/objects/32/4b657c30b81b1437483458d34b74128a60ff10": "eb1d2fbb9acdff52f483812d219d2056",
".git/objects/32/b5938acea919e32f82483cbae237a3365cafdf": "5a43e4454d3ae01b992c07d2591bcb6a",
".git/objects/35/2663bd029f7379ad5db8e2ec5f0bf741f6bffc": "c89bbfdb2ac01a8fff197764fbc5edb5",
".git/objects/35/8aa4f3a448c201899763a3b5b7df386d0e6122": "bdd17b8fefb34425ad4cd77c07862072",
".git/objects/35/97d5e2d22768a807b4822bc689923faa77a3ca": "a25e9b91c0337a680b79479d82729e4c",
".git/objects/35/e9fad812c65f0306070f26f18690056ea70618": "75f2f0a87b886cb38b3011809701a4ec",
".git/objects/36/815935042188a285b58f12ce46ca541af5cc9c": "467f72d490f97ae5040cdea9f5c4ee5e",
".git/objects/36/c162e01b2d18ac68f7e65338914d53e4e80453": "04f3740ebf9b02e755413c1544a2da73",
".git/objects/38/6b9f9a620cd7b0c89eea53a1f208aed9717b37": "b5cd551f233e49042e7f563a6ef82aeb",
".git/objects/38/ffea6f8fcb620d4bfad905479012cebe5d6d71": "ad1be462aa87a278562c386eab106c80",
".git/objects/39/321aeb2940295b75784df12da8c3227027a368": "550edd77130d69c6f3ee912fe5cd7457",
".git/objects/3a/04945bd233e396f19bec9a9d56fbbf54099316": "a85f8900495a62128d5f8c93ab8a6a5a",
".git/objects/3a/429b0eb902d7671651ca25332cf7fdd44ff673": "fe85f99f9ae48bb810b07fd2c85dd2b7",
".git/objects/3d/dabaade48a59cf9d33978ae063f3f0a2fce3da": "e875060a44c350d8697d90cdb25c1b58",
".git/objects/41/3d1de9e8ff932868d3eaf33c76388e06c4b490": "f4644d04acebce58f12b9be85baaf134",
".git/objects/41/3e909401bcd040a6d77fd07bb0b6aedc239724": "bb0760ad8c8cb4c9f2a6a0319c06a615",
".git/objects/41/c9c23efaac74ce44c0fd94f0afddbf27251b83": "7ec5148efe31f61182cf4412bcc90df4",
".git/objects/41/f9475c2206b4deaa316aca297515893cfb2e9b": "e0cacb98a3cbc8c1ef63e9757ae107a1",
".git/objects/42/8f7ce7448fe0db20d17d885eb83179881fef5d": "805cf262bd5c783be9bcf30ea68b0679",
".git/objects/42/9a1c207240ef420aa763ea14d7fcf281c27b39": "3c271b9cd9ec58ee8e19720592eed701",
".git/objects/43/120fe8519aa65e4c65717e876200d9054147df": "48ae8fbc9e8a4adbacf96eea2981ccee",
".git/objects/44/9fec1d81d1920a1c1ea79aea6014665926ccfc": "83cabdd0e1b7673ce0d77de247ac067f",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/47/3e0a7af83dda5b0e6ea6d2ae03a2c8ac5aec41": "f659609d18f2e711e0802e156335d411",
".git/objects/47/edc8cde76a9396aba07541f50455359044d497": "e3ee35ce9866074a277d05ceec88fefe",
".git/objects/4a/87b6d54def31e1760831e8baa1683f72d57eea": "ae152807ec21317c8bf1faead4b9b00b",
".git/objects/4b/53ca40abf9cc0390cd6398d64055bf6864f15e": "98811fd390e2465d328ce2d97eb2ffde",
".git/objects/4b/a893205ce0dff043abb20fb526348cc0d17156": "a79a07b96fe34a317c8b5d7fd7b6a485",
".git/objects/4b/b05a6636827e4b226ef30646d2356cb65ade44": "bb02eb7811476b044fc991ef6ab2b978",
".git/objects/4c/08d674c708a556e3ec8a12a5657055cdf9467e": "5e4ab9300c191e9b8968116d1e7be58d",
".git/objects/4d/5ddbdb9b7680871585c57851648ec531e8677e": "c6a05093f2afb782d493048c348189b7",
".git/objects/4e/4e4caa1e8f33461b3d59a448cde3c6fc4a9b50": "286195dfce51ea407e2a6b28c2253998",
".git/objects/4e/94faf338381b9b77ec01b151817df5310d743c": "e5ab0375ce107ebee6eb9333f97fd238",
".git/objects/51/ad6d8dd2cc868c39b949245702d5c87c0ee0fc": "35b021a5a11b4bbf65ee41b7f1f8b961",
".git/objects/51/cccd8ea25b2a9bb94f6b97671876f813539631": "f44d990f3e910f179e53f2d86923bea8",
".git/objects/51/f8d57f1d91b5f6ac61472f6ee40550af5a66f8": "3d36850472a0794f3c0fa94e0b80bd7f",
".git/objects/52/4d456e256b1e17778bffcbe50eaca57899026c": "09dc0e4590ac1851c89345574213a24d",
".git/objects/53/963caec1bc08726c3e973135f4931af5e63b07": "fe256d7fd1df186be7e9134b5c34d113",
".git/objects/53/b3ac2d0f827f50f51f34590e9ad446864e27f8": "6e41973fc8e97f062f40ba3374990eaf",
".git/objects/56/446d758f3837e76a5534e1cd6c77f936e778ed": "b4f2cbb72e18b6fa7138e18e4a38dd1a",
".git/objects/57/1d5defda311af42a9dfa3b3adf6428db61d004": "19bcbd73fdc62b3d88259154e3f52759",
".git/objects/57/25bd4d4b1d1a392fbaf594083da98c2dd99c52": "da4008828ef4b773871369708fc0d895",
".git/objects/57/7637f537081cf83a7b9b8e6e873177ed937f8c": "d6c55f5646ff128a9b323414909f3d76",
".git/objects/57/ad1692cb3e80db520ec452b0ec295a83ace5dd": "9a6410726443ef4df5ba7fd69ec6bafc",
".git/objects/59/80215660ffc6b9e684f7b048602857a2ce8333": "df8c5b5717297df9720e6cdcc80de867",
".git/objects/5a/7413722dc7126fafe8abac659a0f8248e81f8b": "d9118c1d0e0c9a75262b9f3d3397797d",
".git/objects/5b/4b37f410e5b1b8db38bd2698be29ec691bf175": "c2a3fe1db30d31d06fd85926620811a8",
".git/objects/5b/8f08cd585ec8f4416939f085cbd5ab528cdb56": "f5579f6d20aa52c6c68be025df491fcb",
".git/objects/5b/f934063d75bb265b5d1665f738bd7520b06618": "1190bea87899f4fa700a8b6460b1a9c8",
".git/objects/5d/9e55b4a2f9176568d113a2cfa651d206ed9f36": "3a73535b5f313787c7d974468e60801a",
".git/objects/5e/f39362a956aaa89c35663c71296cf81dc48ba2": "d4cdde7217dca0f6d2d9991789bab86c",
".git/objects/5f/7efc6f274f34de08f74b7f11b26db0bd43edb8": "a1d3136b5d11cdda7428a0b60fb134ec",
".git/objects/5f/9ec38080b265b9e490bf5dc987f31f0fc7b1ea": "73fa3ce9fff45af713bbc5569a7a0116",
".git/objects/61/96c5f8f2cc9c9c20aa9b549edc267991c51aa8": "34224c93dd7fc2972c90c023013de4db",
".git/objects/62/4df70bd4fd17bbd99f1b897ba7e370aa84d516": "c53feb850e342d99e881276f0b379202",
".git/objects/62/ff07a0c604105fa4e79641cbcd4d2929dbece8": "675ae7b5d919a9c8dafc5ce49ee29e84",
".git/objects/63/7cd96a0bd20c0c6f803465237da2482b86b430": "951c474931ca9704c2858c3bb58e066c",
".git/objects/65/7907edb4b93faf02830011d8815c3c722f9dc0": "9c6fbd88681f54566236d83f27e0bf1c",
".git/objects/65/ab645279d415af68500f1bcbb705957129136b": "9d9437142d3ecbf3f521eeb54165fc64",
".git/objects/68/893addaa6c3eeeb09f76f7d9c2796dcaa57a2c": "cadaab84c03de508d9906e94117a3878",
".git/objects/69/c3cfbf8b51d206aacdfa072c1efd1d80a7ccc9": "53a840ddc8d80108559144ba60afcb16",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "c04d0bcbee109da1b68573e9237d1b84",
".git/objects/6a/adba96fdbc8b8e2476f66ff786cd62c80b23aa": "aaba5a2d8351d34df16c6f67c3c6a785",
".git/objects/6a/bcd3d99a166bf82492f68fa1174053d2074641": "0f0b4dc71517907ef1eafdfaf63a2905",
".git/objects/6a/c773682d0f3177089923301a130584382a7206": "2f7e1c6e590ecdcd6f01a2154a047f72",
".git/objects/6b/05d4cf0602dbcc63d030e1f4737abd8d3d4106": "7333b6c141fff8441e8aee8d17dc1250",
".git/objects/6c/3e0363894e13969ee7556064d87079eac2c2dd": "ec15fd6a11642b50a46d753a7967b39a",
".git/objects/71/fd40938d0f91b360f597b00925699fc1043380": "33ec14561a44a3bf9106b3f31fd1f4d7",
".git/objects/72/1b267cba25776a69534d20b9ae3c98118e0dd8": "0c2534f2b297845c80fa3de46cee7938",
".git/objects/72/48d3c40f35494081170e4fe6e6e24b115199f4": "46523fcaf67a4cbb8b24ab5dc2d1ac71",
".git/objects/73/561606dda694f264cb6153c1563dabbe652e84": "151a6ddc7e837267a19b10b18eb98c97",
".git/objects/74/0d0b0806304ae58386c6a226b656115265015f": "253cce3a4192d43a2cfa0f1f07c1b03e",
".git/objects/76/83ccb094fbd8d0ceddfba113d7b2c4a63e1e06": "7e5cb45bf346f8a4da1c8ae869d79bdf",
".git/objects/77/7981aca00816f289ecb0db932605b5db6465b7": "016a439d266e82374233b154a2723c5f",
".git/objects/78/16bbdb65d6b132b077a0cee90e5c3155d3fd4c": "fdff5e6efbc0afc62f5575272cf03b86",
".git/objects/7a/cfeb48e322758037b957cd75aaf385f26d641b": "e5a1613847daf3de2d6add2b7f5b8ba1",
".git/objects/7b/6cf18b6bd008b41eed9a0fcf1ef76b565af1ed": "806bbf0faa0c750360bef47051ab2a48",
".git/objects/7b/94017ed8255488c229e062802a9315d148882a": "c3081f39bae68492b48f44c3f30b6c80",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "aa349e87e38ecb9e74631648723c84ec",
".git/objects/7e/27d6881f01e6365bd0ebf9b1b2c1acb20a8142": "9ba7c111b486546604614309b3eb427d",
".git/objects/7e/7e5480e525834d9fbc2959ef156aee773dd074": "4b00b4c65b0dde6018f668b46326e1d2",
".git/objects/7f/0caad3483aef9388a4293ea0f101c8027aa625": "286a5ba9d4da132669fbce5924641fd5",
".git/objects/80/0d1de4b5c554bdad4ac6bed9056a3cd893843e": "b4cdc7e8636cbdac4e4bf672e0182163",
".git/objects/81/498b7b8b5e09d6022a98f4901606a842673ea2": "edd185469bf393f59ba513ecda1b90f7",
".git/objects/81/9182616fa6247cb4b8059caee1da95c3b87db1": "c045ccd1951b5cf1dedc5a053554851c",
".git/objects/82/524d4873c0d367ddaa0900f4bc3eb6b0e60eaa": "430b4ba59b72a85ca51e4cce5859e5cc",
".git/objects/84/250d8846dab4f64a077e05818ffc80d772bfee": "482f0110e09998b129a1679a6b7cf56d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/85/a5adfbf03a75d46af0a6adbf8acf8831772e4d": "e6e892dc52edcb87a783f77b60867760",
".git/objects/88/755cbc74ee2d568c4f073752f43ea1f5e068a2": "fb20576031546ede3c6cc70ee983b6e2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/5bb2a24c3a79543a894af100161bf1258323e3": "3663d27ef437e534177c6d2cee095e01",
".git/objects/89/761eec28c19ff3b3c9fab9566de9a19e74c662": "18f838be4bffb243dc66bd00b16ad156",
".git/objects/89/dfd1905cd9c003114a6c65fc6749870f90f047": "83dac5132b32a8717614bd7e2706abb6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8b/4830090a25dba092f530ca64a479d8fc0af848": "c1a46c1c0962e288b4d2dfef21e5f17b",
".git/objects/8c/5ef16d27411e4c17ccc7f7245aa92e0b5dc71b": "ea89f371b5a1570b8b66f471805f619c",
".git/objects/8c/74eed2b0ec67b004c0933b552bc5349815c62a": "c2c002a0e9382f9f8076bd3503d5dab2",
".git/objects/8d/e619460f4238886f0e40126e0c0005896f069f": "89114619a340aca9dc4c1a7732a1b9d8",
".git/objects/8e/babd0c90db03c05719f2af6d25fac2fe064dbe": "4924d7a4e48102dc090d605015aca786",
".git/objects/8f/964c014acfc0ae4826096cffbb3c3d9648d788": "d161d574af1f0c33f3690b15ac4c2722",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "6db9ef87f25d1bcf0e7bea48b7fdf817",
".git/objects/90/2c23d38fa0f278df2228cb70a4aca738c5fba8": "d216ea6cbd38b85efbc8201079a3687e",
".git/objects/91/0f8f1fce731999af6fbc8a377e035f989f2eab": "324ec573a1e8a492c5450c63e7533414",
".git/objects/91/11751ae31906652962b0222599565e100293e7": "92912b13f1bde3c066d99f92431479db",
".git/objects/91/9ca4e2e047b5cef3c93f82bfba930169e5b22f": "0e270ae3ec57073c1583f980570f646e",
".git/objects/91/a5d3ea27330941a8b603c2cb3fa178837a098a": "024cdab97f2cba5c1357edeccb80081b",
".git/objects/93/d8c0b6d0436e303cb20f351f6c106ac9ad9fae": "2bca13115a524367610f4a925bc9b26a",
".git/objects/95/891ff7e28d51895695e30be73f0a5a327d4173": "bc10e1abdf2b8a13b13dd80d41cf4cc3",
".git/objects/95/b1256a02e2bc3a7c7e74567818ab41fa2ebb13": "0f1393222d25f9b19b655776257cf8ab",
".git/objects/96/68844e1c045220656365b39aea66c66ebefef5": "22dbe608e8c45a2ba27dbb7b53d216ad",
".git/objects/98/016dd389789fe1bddd537b72410eff6dadfdee": "92035ee88fa006c260b8a767c9278832",
".git/objects/9a/cec9af200388240ac5992a0d5d8db37c68cdb3": "468fc4bc0e59c53d519c270358d4c209",
".git/objects/9b/12bd415a9c622090e5bc2075b7f34bc9e7ad08": "3f5a0f223abc71a12729ecf3a371bdce",
".git/objects/9b/e5f702e9a660dd3894d022925ce2e1b070a3ee": "23329f9a6aaf8b6d939a8bf49227762f",
".git/objects/9f/1100a9d64f7db413eecd6c37e24f16466dc570": "3c71f85b940e07ac61615a454a0cf7b8",
".git/objects/9f/bfcc2f5371f2c917f8765712213db421ed3f85": "c2665f8a74d90a1257f3fdd658ee9e5c",
".git/objects/a0/854bec1cf5d9ef08a6fe2099cf1fb80ef06c87": "d919c8fa82a82298ac245a5d49253ab4",
".git/objects/a0/e1eec861559743510f15fc53741b310677de29": "acf5e33a80d5c5a1941b1b4255a8369a",
".git/objects/a2/38a05a6c12867fe204f8783307107e18ba1cbd": "4618ce9707d93914a97db15d311ffb49",
".git/objects/a4/2396a84d7e4ada237faea76adcd072d12193e2": "2c8b5b50c10218761a6c7551270ab74b",
".git/objects/a4/ddd0de56a83f05335dee91c0128d22100a9525": "705595ccfa14bafb07040d86297389f4",
".git/objects/a5/500d1ef72b7eef79286fd16930b516c1575da8": "bcd4a63209256a0d8322f5c66d021876",
".git/objects/a7/7dabf1fe9a659a5971cf16e3b90c549f791cfa": "9cfb50fe4f823d0b110eb2bdfd365dd2",
".git/objects/a7/d04b39354419883d357a95b1979b591935024c": "6e719486c54038dac63c51ce55d9108a",
".git/objects/a8/e389433fa95c6a14287b42deb759fee606c211": "759f3c53c1146a3a2fc4b26a3f05957b",
".git/objects/a8/e8c9a857b331eb5c5a784ad03008d7433465e2": "658a35fbc1fe30579bf00a10f5b4c5f8",
".git/objects/a9/f9ac4fb43db7bd53e56f45bd3790414a775882": "68c150d4dfd8ed4a8ebab0898af41390",
".git/objects/ac/917bf2c157846bc8681b476d1ddc7d16fa0554": "2c6253c32d19ed6eaa6e9acc4f44b3a3",
".git/objects/ac/bf7cfbe57a05f4ff61e61b90dbb71fa814c1cb": "5689e9d459e41dce3ab6dc26707e78d4",
".git/objects/ae/6f69e5f87f4a864903e75f810240d91ad98d73": "0592d4fd0e9ceadc0fb9e74c14d89940",
".git/objects/b0/1b07e39332b0a841526d2f45eb2f8cfe82292a": "2c5ca59095e582ef3f54d4deac6938cd",
".git/objects/b1/2655f5ea1b187378d095e72759b8e35d547e11": "3b4c5f605dadc6794c2fcc4a70d873fd",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/ac5cf493b85b1b4561c39b0cf7f0bb8e666a13": "f90a7a0fff00de632f125554c462fb1e",
".git/objects/b1/ba0d64eb1240a6c627e53d6089f65a148ee514": "f310b007f8d9f2c8ffac5b0a1b83b294",
".git/objects/b3/2815cf268a4d6433fba00d8b5c516615704768": "3abf4f5756e659ff661cd7b3001b877e",
".git/objects/b3/3a363bd687703afba29274995bb7adf9fffe1a": "0d4793f46ac4663d29d84c162b23bf64",
".git/objects/b6/bce1aa9921d7363b1bab36ad3887db5516a3c1": "53b9c621db6cb439602075d99e52f8cd",
".git/objects/b6/d70c6875f79b9027b7798f594886a143db6166": "6f3fa0992bb142b03f4fcccab0a74bcf",
".git/objects/b6/e9dd5de47d8f17f2f76bc02541a527cdc2a217": "72b14471dc322b7019a94c5f53ca8275",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/ba/6ab9f52c9696ee79405010c1d0bbd4cd878012": "284b46814839772c5d5b43c705e64e58",
".git/objects/bb/6591f79f2b68a438506a4776caf7cb37f8e0f8": "2432d3a2700402757877f0f880d51869",
".git/objects/bc/b6e20d259cfd385313fddda3ce598be67821e0": "c5121f2abec73d1d7823a5fe137ca850",
".git/objects/bf/90eb7a8d80cc96e4f14e9349dcb45d9c9c907d": "005d26bd7f775fa43abe66aeea36ea68",
".git/objects/bf/9e903fc635efe1510ee02d6b12f3f8252b9659": "133caca890f2c2757bbda6b52afd2b14",
".git/objects/bf/afda924a14ec501855c72d557ca1a8db0db7fb": "739b21f79e47eedf588d43d69037929b",
".git/objects/bf/c1110ce23f84b0be96cdb1ab1084eaa05d97cf": "38114df0608df4f09a1d24b0f6a2866e",
".git/objects/bf/d8b1571790776458949652e379e435bef75820": "8358468b2b49faa4052725272654fb52",
".git/objects/c1/0f427af887b16f6e682263a63bc7aaedfb0fd2": "c5d7ded463147a0eaf05b49d312263c0",
".git/objects/c1/56feea47616c74db049adbde76fabe8e284540": "e0de2d800ca6309815792cc574802377",
".git/objects/c4/1a7d6a474ebe50448a111bf57e94d2002283e4": "507a98018e717341eb162d0995f46632",
".git/objects/c5/4b37d528a8a006668a36cf2a4de26276584dee": "eb8b924a83bbe9c759672ee0e58a8ace",
".git/objects/c6/3d33e3ea71e649345af6b6adcee65ecf29cc48": "db629ee2c75aa567734efb32d861ccb1",
".git/objects/c6/84692ce1e69ffedabe7189d6f46f44b5f8cd9d": "992ea4510eec326266746ebbc873b276",
".git/objects/c7/40be5836ec8b91f48a4589602e3e07598264d7": "d56a6222648fd614b675ba7d7b57f029",
".git/objects/c7/57454bf334297fb93e42236ec12a202d5a040d": "edb4b801e3275bd6181c771d401cd6aa",
".git/objects/c7/8d2d7fd987aec606c43c73c811ad3769ad5d3f": "5fb2f52670b714180af126c032d9ac76",
".git/objects/ca/1769cfe141b806deeeac40e37cdf082b632801": "de54827c64b260321a5b572f6318eb51",
".git/objects/ca/3f66f8a09044a66e9370b788338b00cc9fe121": "0ff473d48e4af9ef74d67aeea3ccbd12",
".git/objects/ca/592354554fd137dbb91304cd1c9519358a110f": "a0fa05ec094aabb6de18a3e6bf9dd760",
".git/objects/ca/75472fbbb3ece67cf37b0bbb12c8d4d3d66e21": "fd9c4e9631a546bcc846b94ddb18f6b5",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "bd87a7cf5ea05252e5a8b745c0877738",
".git/objects/ca/e6de26f08a4fba402ed03ae3ba4c57e7878027": "997666bc3ed4202fa0c5d1bdb4530a3a",
".git/objects/cd/42e8ea6f4476f559c725881bd82c856a78762f": "cae3830eca9a6419f4b91a34581452f9",
".git/objects/cd/f781ba1eb7d96af77220cea58d74cc468d4734": "b5d1dd4546176db5dcf9214bae83636d",
".git/objects/ce/9a0fbc8f5f47aae0846d2cc3d843fe9f63060f": "42094acb8a81f1226f8800b1ad0a5ecd",
".git/objects/cf/e002027300e4f1d81b1c6ce6e921586d92e3e3": "70edd72efbf71cf89226f3a5e540f6a7",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/d0/d3b92f00c2bdb345db2c0a9fd0c2bdc538ea49": "f73ec0652edcca1234ce8904beeb2dad",
".git/objects/d1/5f8d48503f54698135c3a98659bf9737982d37": "fc742015d7829a2264184a603525ff97",
".git/objects/d2/486b0ac55505243dbc2e9804e22610b580c2c7": "197d736335097146401f9b8c3832e5df",
".git/objects/d2/f06819a575cc2b58025d27f6d1b9c5c6709403": "c1c605585ab9789e46ab371ceda07cef",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/983c8efd15eba03cc181c1e213bd7e5b895743": "7d60b712b811a2e2a9b533e466e229bf",
".git/objects/d5/de38b659c34e177f1a81341000de0ece085adb": "c7ac8ff11b135f698c217afd0f9f4de9",
".git/objects/d6/55fc052b8798e04e1c052c039ed22f0d23be90": "4f1ea5409ea85305737258af3337c986",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d8/6f300c7c6d3f638f41ba0e5ea04fef03edd975": "5db8329d568a439d256a361f0021a740",
".git/objects/d9/1343b4bb02f716f5007a38f9129ccfa7d2186b": "beba42fd24a513769682b1d8847dd3b0",
".git/objects/d9/5520b24c5820c52907a75a524a4d260c55c2fd": "6a01e36c3c39abee6343ae1564797691",
".git/objects/d9/ab37cbb292d7dbbdb284f1f68d9aa9bb30589b": "586ec3a8b0de2c5eb30e97560c4424ae",
".git/objects/d9/cd755b2e721d81f5e7c4c12ee0b2d8a8fb0c21": "aecc81e1fccce050782d7bb092cef069",
".git/objects/d9/da3fd2d29bee7e0ec794eed448bde3bde20fe8": "a9f6b870daf9ae75e1d7f39cc4f1fe9d",
".git/objects/d9/dd7075728cff5d070d25a9767841f42cc08b51": "86eb12e3edcfa2202f1e0b0da763e57a",
".git/objects/d9/fe7503529b254dc9b7e8bdcce17c5ea6ab658c": "63f9ccced3d068839a2fd260e5d224cd",
".git/objects/da/327b28bcccac54a806228a9b7c1857810a5bd2": "1ce92f49cf10c70870506b5068a45499",
".git/objects/da/89c7cd357bea31c224600e5d5737a1c6c48697": "c6f27ace83efcd874174985398b738ce",
".git/objects/da/9e8007a3e0d4415808e3da335162c0876b2f8a": "dd8c155a0f1e199f916c8cd94ea76e2f",
".git/objects/db/af77a6ba7079275180071512c9420aa6d13f2a": "cce612a2a6420352d09f594d30f13041",
".git/objects/dc/53ab7bc412f212af902727335fa7784b00cc88": "e97389d7015701e9310acb13b92d8f46",
".git/objects/dc/a337569f3f5af03c9e3320e4154161e6ff69f4": "dd10c9c6944ec7ff13f166f2a2cb20a1",
".git/objects/dc/c49e7bea6ca6c72dacb13e4f7d33c175c12d05": "2243c6c63f9e3c53650d452b9a9a09aa",
".git/objects/de/0d47b4ede144730ae7d5815b7938baf16f5785": "6f0cff29b069e4fc0e823995ccced021",
".git/objects/df/af8da03f785acf8d111fcd7aabb8f7c178fe0e": "35f4705557ee23143466c300d990df7f",
".git/objects/df/c46570543887904b5db0dc9ee2291b031a30a2": "74143d82f52573d8fec71ba1838e3fa1",
".git/objects/df/d48cd80b020f06fc63c4383fbfb18963ea55f6": "43cdfa5413fbdaf9d04a1985c2be3bbe",
".git/objects/df/ec5031792fbf603481ed54dd7fea01fd57e3a5": "d809b5af5491a82a0073523b17fd92e1",
".git/objects/e2/8396e5499b80b0169b0617a305126fd17aa388": "73aa50cfc445e704745cc53ef1339c91",
".git/objects/e6/41a63f458c042c51a1d6e623eb109dd99e69a1": "f53036035b5e0d10f373cbe8cc36d466",
".git/objects/e7/e9123b9253ea67ccfa6fee45d17bf380d4a142": "c1b4d80d42e64fe52c52959d565576e6",
".git/objects/e8/1a7aade7386581192c0119fc814f68fc464f6c": "62d99174bdb605b9a581f1c6db049fea",
".git/objects/e9/73afac591fcceb7108f7b66be59b6202f8d05d": "ceba1c68c1c7418d67d96c5fef4d9377",
".git/objects/e9/cd0d770f83df57f193f9d00fcecd1a497e24e2": "61aed9832549c6188d02da7d3cefb4df",
".git/objects/ea/54f2c893730686f218ac3828b304b77d36c9ae": "838685c895b8dfce37ff49882ddd87bd",
".git/objects/eb/8c3d672e2a671dc0e57fc50893b361a5676b33": "c72ca69bbef462dfe887a14d832fc0c3",
".git/objects/eb/9435e4d4656046c28ae086182d9d3040b7e273": "7fece23c73fb531132093ab8b1effd36",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/a8e693782c136e65674ad6a04ecb18c2cb1b08": "4568155b2a16f3e6e923f2f1ee9d5334",
".git/objects/ec/c7378d040e2105ce35a7e0d38453f5e0c16a4c": "a2031c57f88dc6492c3855731ebb9abb",
".git/objects/ec/ea3bd0a049175a2ed37af1ba746c7955226b1d": "381ad7924e0d383cb8274af463c941ae",
".git/objects/ee/b856cf7de8708dc28ff856197c936d1952cdb7": "73628899671c8fcb860145e58be42151",
".git/objects/ee/e075908a8e3d99d5dc80d99ab41066c778695f": "ec2cf76dae0412799f8c202cb2a4bb09",
".git/objects/ef/e5e9b14ca6106a68277905890b74f9269d5565": "1a730cfaddda150c3460fd10914bca0f",
".git/objects/f0/713f290a8678d5faef38ae7a91f33cfee6569f": "dd963a8fc948cc16e5892a6df3c45ead",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "4e8a5e8c874ac90056955f3dfcb153ad",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/0702d52e5abc992f08eef1692d92c547001dac": "c27b662f9bda725ecc44074961de3990",
".git/objects/f3/37ceae875e38d5bf302ebec6d0600548a430e8": "e0688114dde4669a855d9d784541c5f4",
".git/objects/f3/9abe1cbdee9bf96ff705cfcf04f99c76f13f98": "33c191b6104c7bc309c2e0a0da989cad",
".git/objects/f3/b239a3370c325b2ea904bf6486e8dba30c407b": "cafbc2385b424b83a34c9f896fb6061c",
".git/objects/f6/6b1f6c012e691b195ebea2801a3972de3552f5": "4c7cb8f84bd1ee1fdae583cb85dc09cd",
".git/objects/f6/750f3b718e9a1b4e8f259402d21ccc14dac4ad": "68743137cdc2dbb3b3fac239cc827198",
".git/objects/f7/38583e554fab71c7b216c05c5a2497440770be": "45374367a62b8e2c188cd8d1bd8eef00",
".git/objects/f7/fcbb861e4b5e2f620593255526506f9b9c4969": "a6f514057efa7d660b3626250a5aebbf",
".git/objects/f9/2e3158cda6d674eed48ec1a61f21480be4aeac": "5d19e31de80e8808282d900e792f28c6",
".git/objects/f9/c9b796e3ae38dac2653278317688cfca857c17": "c0c29e1b71d2c7d8cff510d2af1cbc7f",
".git/objects/fa/782158eba7adcfd908878d86c80cd59202c13a": "debc3f2d35fcdfa02310e098d53d2b88",
".git/objects/fb/3726ca722845b33dc4bab74a3d63cadbbb5b4e": "1d054a99c86a91ac2111552e0b80b398",
".git/objects/fc/12666c72ae9de4f8b62f2790926df7a72b2926": "5d0f18568db5b401f04a7726c8ea84d0",
".git/objects/fd/7beb1ceeefd5bd6f457344bdd8839df431ecf1": "1e77ea56bf4fb90c391a730bf74f97fe",
".git/objects/fd/c157afff4aac75d6d09f153e0d05a4dba08692": "c9ae8e917160d8e4f52469ed946eeb03",
".git/objects/fe/5d82cc99e8e10f0099c691003ec48de1a8d959": "5ce0e053e3e729b85d154ca46a0ba5d9",
".git/refs/heads/main": "7254f8167c4be4ec7c4fb1aac8faad67",
".git/refs/remotes/origin/main": "7254f8167c4be4ec7c4fb1aac8faad67",
"assets/AssetManifest.bin": "f0d7e204479b500c4a1e8880ec4cda00",
"assets/AssetManifest.bin.json": "305666faf885381758948521300a39b0",
"assets/AssetManifest.json": "b34e3de9032e2f357ed39a38031fd2cd",
"assets/assets/barcode.png": "25327d4067a3fafbd252a2e71957f141",
"assets/assets/home.png": "5d60b9a061a5af8fe3327596a53e37e7",
"assets/assets/HomeDisplay.png": "e7f3f2bdf9da64871e1f1942841ad0f2",
"assets/assets/logo.png": "21116af19d33671d7932e33069d5e921",
"assets/assets/More.png": "3c744282a78d05eac5780dba8e918403",
"assets/assets/MoreDisplay.png": "f82e15b22ca2ec6686560d08d9c345f5",
"assets/assets/Rider.png": "0d7cdb1123bde15e7bd402dcc9805c25",
"assets/assets/RiderDisplay.png": "5d1e352ada95299f0e5bc2d112a80855",
"assets/assets/Ticket.png": "5cc5919bc5fc6739007e787816dca1f6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "eeb678a0f32c4cf622a6a43c44cb2bd0",
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
"flutter_bootstrap.js": "443db2ad053cd76d2fc2f23186b826b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "25ecc56354d8188e3befc7ac9a6de3d0",
"/": "25ecc56354d8188e3befc7ac9a6de3d0",
"main.dart.js": "ab33cd56fb21d5c896463ccf20470f94",
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
