if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const f=e=>d(e,n),c={module:{uri:n},exports:s,require:f};i[n]=Promise.all(a.map((e=>c[e]||f(e)))).then((e=>(r(...e),s)))}}define(["./workbox-f2630e7e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/06/20/Handbook of Fingerprint Recognition/index.html",revision:"6d3fe2bf2dd105d824e081beddde713f"},{url:"2023/06/20/hello-world/index.html",revision:"88b301433a4df4fa1d65dc3f11d7deff"},{url:"404.html",revision:"4105d7aa676cb96dec8e3ed2234a13ad"},{url:"about/index.html",revision:"6c4f1f43f0f8335a79e0316b52e1e329"},{url:"archives/2023/06/index.html",revision:"fea620a11d8c432538f612886611d0bd"},{url:"archives/2023/index.html",revision:"1cadf380289085580020500cb2ad9743"},{url:"archives/index.html",revision:"dac0f58c78bd8248bfaffca2fcb4f0cd"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/《Handbook-of-Fingerprint-Recognition》/index.html",revision:"13c2bff9b7fdd53cdc687d0871253f2f"},{url:"categories/index.html",revision:"0ab34d53cd743a8843298db6d5e7914d"},{url:"css/bounce.css",revision:"d7092dae56436db17c78afa545a3bcd8"},{url:"css/index.css",revision:"fbb482bafe8ab2418319c420b729df88"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"e75f82532fe32e9d159706f9c2060ec0"},{url:"gallery/nene/index.html",revision:"2db0b12c64bf308736349d4bf8cc5316"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/archive_img.png",revision:"6371d6dbedba092c7dfdeea9664f77d4"},{url:"img/category_img.png",revision:"7d32801aa22da9e2770332702e0f090b"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/gallery/宁宁_CrownKnight.png",revision:"83d140aee5db922353f32af65f555061"},{url:"img/gallery/宁宁_元宵2.png",revision:"6764bb526dcda2c3f191a2d93bc53280"},{url:"img/index_top_img.png",revision:"23ddf1cb10d475791f4a4517786614fc"},{url:"img/jewel-assets/jewel.png",revision:"b3b8e59149a2cf41b5b038d8e3670490"},{url:"img/jewel.png",revision:"b3b8e59149a2cf41b5b038d8e3670490"},{url:"img/jewel2.png",revision:"c3f95e85ca7ad7c6b08b1e555b06af67"},{url:"img/logo.png",revision:"34c31820972cf4d21150522059736333"},{url:"img/pwa/144.png",revision:"3db13fc0ec6a8974bcaa5093fc1178a2"},{url:"img/pwa/16.png",revision:"32516a5ad1b1236253f71f6c2875251d"},{url:"img/pwa/192.png",revision:"efbb78811c78ddb34daf06227dafd169"},{url:"img/pwa/32.png",revision:"b5582e244a31b6142c9582166a527967"},{url:"img/pwa/36.png",revision:"3ab76f4fd90bece5e9f65d0720fe0deb"},{url:"img/pwa/48.png",revision:"9b5d2390bee92aba34f51d8be96f8562"},{url:"img/pwa/512.png",revision:"24f460228777c98f6acbf6db5b99eaa2"},{url:"img/pwa/72.png",revision:"9fe97be79d18950f35f6eb0d2954cd89"},{url:"img/pwa/96.png",revision:"71f7779ebd94bd145ea6dcf01b8efbf5"},{url:"img/pwa/apple-touch-icon.png",revision:"199a36cc75ad31b2b4354beba43caa6c"},{url:"img/tag_img.png",revision:"ca87bfd910867d7fa6cac953366e27a3"},{url:"index.html",revision:"3e2f93c230f1573dc2630a1459feded2"},{url:"js/foot.js",revision:"9f057805c290e4fda300a8f816811417"},{url:"js/hideLive2d.js",revision:"1e954c625b2a2152a49f2946bcec1f59"},{url:"js/jquery.js",revision:"f9bdfd807c7561b5a4eb97516f348321"},{url:"js/Live2dLoader.js",revision:"50882d52567f48b18f958bebd92567ce"},{url:"js/main.js",revision:"879de54f3e927e1b1a5e552329f0e019"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"live2d_models/15nene_cloth001/15nene_cloth001.2048/texture_00.png",revision:"9a3647d04e88c65454e6bb5181e2c659"},{url:"tags/index.html",revision:"113ef4af3188b324dcaf0df2b8c99423"},{url:"tags/指纹识别/index.html",revision:"26fa5c942d594bad6672141ebb839e96"},{url:"tags/机器学习/index.html",revision:"038a12130f5106a7035c60e67c0d9d17"},{url:"tags/模式识别/index.html",revision:"1fb4929484d7ed835a65803445810a2e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map