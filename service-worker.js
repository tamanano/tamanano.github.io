if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const s=e=>a(e,n),f={module:{uri:n},exports:c,require:s};i[n]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(r(...e),c)))}}define(["./workbox-f2630e7e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/06/20/Handbook-of-Fingerprint-3rd/0-Preface/index.html",revision:"74562174ef86f0767e5498cc1f5ca3e9"},{url:"2023/06/27/Handbook-of-Fingerprint-3rd/1-5-System-Errors/index.html",revision:"8bb73354d5934d25e827b9867037da34"},{url:"2023/06/27/Handbook-of-Fingerprint-3rd/1-5-System-Errors/Untitled.png",revision:"1fee63bc45b80c9c50609f7bc0f31dcd"},{url:"2023/06/27/Handbook-of-Fingerprint-3rd/1-5-System-Errors/Untitled1.png",revision:"3783bded5ab430da0b3a275c17fdf69b"},{url:"2023/06/27/Handbook-of-Fingerprint-3rd/1-5-System-Errors/Untitled2.png",revision:"bbd0076a6f6a500a063bdc4b3f567d96"},{url:"2023/06/27/Handbook-of-Fingerprint-3rd/1-5-System-Errors/Untitled3.png",revision:"f795c246830846788d12f9eca7e186e1"},{url:"2023/07/25/Games103/1-math/cover.png",revision:"e20f5c2cd844bd4f5522954b54fbc185"},{url:"2023/07/25/Games103/1-math/index.html",revision:"16e31f70633a3bccf9f471bf9260134a"},{url:"2023/07/25/Games103/1-math/Untitled.png",revision:"ddb5e01364eeb5d4aa151b7fa79edb37"},{url:"2023/07/25/Games103/1-math/Untitled1.png",revision:"5370ff2fc05f7d22323c410831ce24ae"},{url:"2023/07/25/Games103/1-math/Untitled10.png",revision:"926c6295770c8520e9dc9a8298d1608a"},{url:"2023/07/25/Games103/1-math/Untitled11.png",revision:"bec2439ea33e624cac8bd0b5fb4ed301"},{url:"2023/07/25/Games103/1-math/Untitled2.png",revision:"e0a360985e9c06d07b17d5809029d155"},{url:"2023/07/25/Games103/1-math/Untitled3.png",revision:"749c93d07287f8b4b447af721d3ffd70"},{url:"2023/07/25/Games103/1-math/Untitled4.png",revision:"bad973556cdb72af7f88b68cda6f6dff"},{url:"2023/07/25/Games103/1-math/Untitled5.png",revision:"b17273f22e44bd4c22bd18f3e0c61e5d"},{url:"2023/07/25/Games103/1-math/Untitled6.png",revision:"3d33e3efaf1bfb2ce7a9eaeddb4787c2"},{url:"2023/07/25/Games103/1-math/Untitled7.png",revision:"f66019154a41555bf4479fc94a32fe70"},{url:"2023/07/25/Games103/1-math/Untitled8.png",revision:"07c00047859e49629e9af1ce8ca8e1a7"},{url:"2023/07/25/Games103/1-math/Untitled9.png",revision:"e7e492c0c8b49a178220ab7043956126"},{url:"404.html",revision:"b2fd3f17cd0cff39bb2fb8bd060c9a5d"},{url:"about/index.html",revision:"066bf55d6f1cd60470d0f3d4eb0ac04c"},{url:"archives/2023/06/index.html",revision:"cb6b294ddb16b7faa228d9bfd583b348"},{url:"archives/2023/07/index.html",revision:"87693529cf9596baccbb38c927b8d1f7"},{url:"archives/2023/index.html",revision:"033d8ea634a6737c4f4cfeb55b6df218"},{url:"archives/index.html",revision:"cc72d39ab6b8d0941332d92d43a7ae42"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/《Games103-基于物理的计算机动画入门》/index.html",revision:"c127e2dc61200907a5fa0725f571bd48"},{url:"categories/《Handbook-of-Fingerprint-Recognition》/index.html",revision:"ae6697e1d7ba6ada9253818bb994ef77"},{url:"categories/index.html",revision:"f464efcb9fcfaf051ac3c46c1b8fd18f"},{url:"css/bounce.css",revision:"d7092dae56436db17c78afa545a3bcd8"},{url:"css/index.css",revision:"fbb482bafe8ab2418319c420b729df88"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"7cffdb3fb64d15ccce7e671a9436dd26"},{url:"gallery/nene/index.html",revision:"168393dd2b51c5035480256e02d3ef94"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/archive_img.png",revision:"6371d6dbedba092c7dfdeea9664f77d4"},{url:"img/category_img.png",revision:"7d32801aa22da9e2770332702e0f090b"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/gallery/宁宁_CrownKnight.png",revision:"83d140aee5db922353f32af65f555061"},{url:"img/gallery/宁宁_元宵2.png",revision:"6764bb526dcda2c3f191a2d93bc53280"},{url:"img/index_top_img.png",revision:"23ddf1cb10d475791f4a4517786614fc"},{url:"img/jewel-assets/jewel.png",revision:"b3b8e59149a2cf41b5b038d8e3670490"},{url:"img/jewel.png",revision:"b3b8e59149a2cf41b5b038d8e3670490"},{url:"img/jewel2.png",revision:"c3f95e85ca7ad7c6b08b1e555b06af67"},{url:"img/logo.png",revision:"34c31820972cf4d21150522059736333"},{url:"img/pwa/114.png",revision:"e9a655ef48986cb8d28b9b54d5ef85c1"},{url:"img/pwa/144.png",revision:"3db13fc0ec6a8974bcaa5093fc1178a2"},{url:"img/pwa/16.png",revision:"32516a5ad1b1236253f71f6c2875251d"},{url:"img/pwa/192.png",revision:"efbb78811c78ddb34daf06227dafd169"},{url:"img/pwa/32.png",revision:"b5582e244a31b6142c9582166a527967"},{url:"img/pwa/36.png",revision:"3ab76f4fd90bece5e9f65d0720fe0deb"},{url:"img/pwa/48.png",revision:"9b5d2390bee92aba34f51d8be96f8562"},{url:"img/pwa/512.png",revision:"24f460228777c98f6acbf6db5b99eaa2"},{url:"img/pwa/57.png",revision:"cf3bdf8dc0ce20067b6c5046ae7c83d4"},{url:"img/pwa/72.png",revision:"9fe97be79d18950f35f6eb0d2954cd89"},{url:"img/pwa/96.png",revision:"71f7779ebd94bd145ea6dcf01b8efbf5"},{url:"img/pwa/apple-touch-icon.png",revision:"71e25298988fa3fb6779336be161c3eb"},{url:"img/tag_img.png",revision:"ca87bfd910867d7fa6cac953366e27a3"},{url:"index.html",revision:"4dd46aea0ef4c6ff756bcce52686d6ae"},{url:"js/foot.js",revision:"c255a346f6a15c16f78dd9f55d561db5"},{url:"js/hideLive2d.js",revision:"486fc22c9a4a35ab61d69d2170e8eba7"},{url:"js/jquery.js",revision:"b36c89f3fe3f4cf6857df98b90c24d55"},{url:"js/Live2dLoader.js",revision:"ecba638d7264be47779c666763be1f67"},{url:"js/main.js",revision:"879de54f3e927e1b1a5e552329f0e019"},{url:"js/pixi-live2d-display.js",revision:"5cf7ea9c78703d5097278e661512bb30"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"live2d_models/15nene_cloth001/15nene_cloth001.2048/2.png",revision:"50169065319e448ae5e2d9b1fe8791c2"},{url:"live2d_models/15nene_cloth001/15nene_cloth001.2048/texture_00.png",revision:"9a3647d04e88c65454e6bb5181e2c659"},{url:"live2d_models/Haru/Haru.2048/texture_00.png",revision:"1a563d5af2ebd6a75e975c7fe9170959"},{url:"live2d_models/Haru/Haru.2048/texture_01.png",revision:"9f6ca868e3d53d6bc31df75fea4e37f8"},{url:"tags/index.html",revision:"0287b972be6b83294e3b775e52422ec2"},{url:"tags/指纹识别/index.html",revision:"9a895b029459935e74de725f77d23716"},{url:"tags/机器学习/index.html",revision:"bef4d1ca79a26a2fdcbb60bb10a0ca5f"},{url:"tags/模式识别/index.html",revision:"912a39be4a45b6f448874e1c5c0f0fe3"},{url:"tags/物理模拟/index.html",revision:"ba91bc36a90778a8a642da47a88a7cd5"},{url:"tags/计算机动画/index.html",revision:"bd1f85924907f8bc45cd7b48eec7a7ec"},{url:"tags/计算机图形学/index.html",revision:"8e9dd5d31a301f9edc6b1f1771c651cf"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
