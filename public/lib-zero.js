console.log("!!!!! lib-zero init !!!!!");

const maindiv = "appkanvas";

class LibZero {
  const appstate = {
    START: 0,
    CUTSCENE:1,
    GAME: 2,
    LOST:3
  };
  if (Object.freeze) Object.freeze(appstate);
  
  let _scene;
  let _kanvas;
  let _engine;
  let _state = appstate.START;

  function loadConfig() {
    
  }


  function init() {
    _kanvas = document.createElement("canvas");
    _kanvas.style.width = "100%";
    _kanvas.style.height = "100%";
    _kanvas.id = "kanvas";
    const element = document.getElementById(maindiv);
    element.appendChild(_kanvas);
    
    _engine = new BABYLON.Engine(_kanvas, true);
    _scene = new BABYLON.Scene(_engine);
    //const scene = createScene();
  
    var camera = new BABYLON.ArcRotateCamera("Camera",
      Math.PI / 2, Math.PI / 2, 2, 
      BABYLON.Vector3.Zero(), _scene);
    camera.attachControl(_kanvas, true);
    var light1 = new BABYLON.HemisphericLight("light1", 
      new BABYLON.Vector3(1, 1, 0), _scene);
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1 }, _scene);
  
    window.addEventListener("keydown", (ev) => {
      if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
        if (_scene.debugLayer.isVisible()) {
          _scene.debugLayer.hide();
        } else {
          _scene.debugLayer.show();
        }
      }
    });
    
    _engine.runRenderLoop(() => {
     _scene.render();
    });
  
  }


}

new LibZero();
