/*
 * @!: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @Date: 2023-02-04 20:29:50
 * @LastEditTime: 2023-02-10 00:46:44
 * @FilePath: \Blog-private\source\_posts\Web\JavaScript\Live2dLoader\src\Live2dLoader.js
 * @Description: live2d loader
 * @?: *********************************************************************
 */



// Under two lines for dev to see functions, Comment before Commit.
// import * as PIXI from "pixi.js";
// import * as live2d from "pixi-live2d-display";
// console.log(findLive2d)
// let live2dInstance = new findLive2d.default;
// const live2dmanager = live2dInstance.initialize({ efficient: false})
// live2dmanager.addModel({path: '/live2d_models/Haru/', 
// fileName:'Haru', modelName: 'Haru'
// }, false).then(function(result){
//   console.log(result)
//   result.appear()})
// model.prototype.appear()
live2d = PIXI.live2d;
base = PIXI.BaseTexture.defaultOptions
class Live2dLoader {
  constructor(models) {

    console.log(
      "%cLive2D using: https://github.com/Weidows-projects/Live2dLoader",
      "color: #6aff00;background: #0c222e;"
    );
    let config = models[this.getLive2dIndex(models)];

    this.load(config);
  }

  getLive2dIndex(models) {
    function setCookie(cname, cvalue, exseconds) {
      const d = new Date();
      d.setTime(d.getTime() + exseconds * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
      let name = cname + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    let cookie = getCookie("live2d");
    let index =
      cookie != "" && cookie >= 0 && cookie < models.length
        ? cookie
        : Math.floor(Math.random() * models.length);
    if (cookie != index) setCookie("live2d", index, 24 * 60 * 60);
    return index;
  }

  isMobile() {
    var WIN = window;
    var LOC = WIN["location"];
    var NA = WIN.navigator;
    var UA = NA.userAgent.toLowerCase();

    function test(needle) {
      return needle.test(UA);
    }
    var IsAndroid = test(/android|htc/) || /linux/i.test(NA.platform + "");
    var IsIPhone = !IsAndroid && test(/ipod|iphone/);
    var IsWinPhone = test(/windows phone/);

    var device = {
      IsAndroid: IsAndroid,
      IsIPhone: IsIPhone,
      IsWinPhone: IsWinPhone,
    };
    var documentElement = WIN.document.documentElement;
    for (var i in device) {
      if (device[i]) {
        documentElement.className += " " + i.replace("Is", "").toLowerCase();
      }
    }
    return device.IsAndroid || device.IsIPhone || device.IsWinPhone;
  }

  async load(config) {
    let canvas = document.createElement("canvas");
    canvas.id = "live2dCanvas";
    canvas.style.display = "block";
    document.getElementById("rightside").appendChild(canvas);
    canvas.style.position = "fixed";
    if (config.left) canvas.style.left = config.left;
    if (config.right) canvas.style.right = config.right;
    if (config.top) canvas.style.top = config.top;
    else if (config.bottom) canvas.style.bottom = config.bottom;
    else canvas.style.bottom = 0;
    if (config.opacity) canvas.style.opacity = config.opacity;
    if (config.background) {
      canvas.style.background = "url(" + config.background + ")";
      canvas.style.backgroundSize = "cover";
    }
    if (!config.mobile && this.isMobile()){
      canvas.style.display = "none";
    };

    this.app = new PIXI.Application({
      view: document.getElementById("live2dCanvas"),
      width: config.width || 800,
      height: config.height || 600,
      transparent: true,
      antialias: true, // 抗锯齿
      autoStart: true,
      resolution:2
        });
    this.app.renderer.autoDensity=true;
    this.app.renderer.resize(config.width, config.height);

    this.model = await live2d.Live2DModel.from(config.role);
    this.app.stage.addChild(this.model);
    this.model.scale.set(config.scale || 0.1);

    if (config.draggable === true) this.draggable(this.model);
    this.addListener(config, canvas, this.initMotionIndex());
  }

  // 可拖动
  draggable(model) {
    model.buttonMode = true;
    model.on("pointerdown", (e) => {
      model.dragging = true;
      model._pointerX = e.data.global.x - model.x;
      model._pointerY = e.data.global.y - model.y;
    });
    model.on("pointermove", (e) => {
      if (model.dragging) {
        model.position.x = e.data.global.x - model._pointerX;
        model.position.y = e.data.global.y - model._pointerY;
      }
    });
    model.on("pointerupoutside", () => (model.dragging = false));
    model.on("pointerup", () => (model.dragging = false));
  }

  initMotionIndex() {
    let motionIndex = [],
      definitions = Object.values(this.model.internalModel.motionManager.definitions);
    if (definitions)
      definitions.forEach((value, index) => {

        let file = value[0].File;
        if (file.match("w-normal-nod01")!=null) motionIndex[0] = index;
        else if (file.match("w-adult-blushed01")!=null) motionIndex[1] = index;
        else if (file.match("w-adult-tilthead0")!=null) motionIndex[2] = index;
        // console.log(motionIndex, file);
      });
    console.log(motionIndex)

    return motionIndex;
  }

  addListener(config, canvas, motionIndex) {
    // 有的旧模型(比如lafei)不支持, 无法触发执行; 所以统一监听document的点击事件
    // this.model.on("hit", (hitAreas) => {});
    // this.model.emit("hit");

    this.app.view.addEventListener("click", (event) => {
      if (config.pierceThrough !== false) {
        // 鼠标穿透, 先把 canvas 设为可穿透
        canvas.style.pointerEvents = "none";
        // 为该元素派发点击事件 https://www.blogwxb.cn/js%E4%B8%AD%E7%94%A8x%EF%BC%8Cy%E5%9D%90%E6%A0%87%E6%9D%A5%E5%AE%9E%E7%8E%B0%E6%A8%A1%E6%8B%9F%E7%82%B9%E5%87%BB%E5%8A%9F%E8%83%BD/
        document
          .elementsFromPoint(event.clientX, event.clientY)[0]
          .dispatchEvent(
            new MouseEvent("click", {
              bubbles: true, // 事件冒泡
              cancelable: true, // 默认事件
              view: window,
            })
          );
        canvas.style.pointerEvents = "auto";
      }


      let ifRandom = true;

      if (ifRandom === true) {
        let keys = Object.keys(
          this.model.internalModel.motionManager.motionGroups
        );
        this.model.internalModel.motionManager.startRandomMotion(
          keys[Math.floor(Math.random() * keys.length)]
        );
      }
    });
    if(!config.mobile && this.isMobile() ){
    document.addEventListener("touchstart", (event) => {
      canvas.style.pointerEvents = "none";

      var rect = this.app.view.getBoundingClientRect();
      let offsetX = event.touches[0].clientX - rect.left,
      offsetY = event.touches[0].clientY - rect.top;

      if (
        0 < offsetX &&
        offsetX < this.app.view.width &&
        0 < offsetY &&
        offsetY < this.app.view.height
      ){ 


      let ifRandom = true;

      if (ifRandom === true) {
        let keys = Object.keys(
          this.model.internalModel.motionManager.motionGroups
        );
        this.model.internalModel.motionManager.startRandomMotion(
          keys[Math.floor(Math.random() * keys.length)]
        );
      }
    }
    });
  }
  }

  // hitTest(poX, poY) {
  //   let hitAreas = [];
  //   ["TouchHead", "TouchSpecial", "TouchBody"].forEach((id) => {
  //     let bounds = this.model.internalModel.getDrawableBounds(id);
  //     let b =
  //       bounds.x < poX &&
  //       poX < bounds.x + bounds.width &&
  //       bounds.y < poY &&
  //       poY < bounds.y + bounds.height;
  //     if (b) {
  //       hitAreas.push(id);
  //       // console.log(id);
  //     }
  //   });
  //   return hitAreas;
  // }
}