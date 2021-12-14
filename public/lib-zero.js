console.log("!!!!! lib-zero init !!!!!");

const maindiv = "kanvas";
const state = {
  start: 1,
  end:100
};

function init() {
  const canvas = document.createElement("canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.id = "maincanvas";
  const element = document.getElementById(maindiv);
  element.appendChild(canvas);
  
  const engine = new BABYLON.Engine(canvas, true);
  const scene = new BABYLON.Scene(engine);
  //const scene = createScene();

  var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
  var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
  window.addEventListener("keydown", (ev) => {
  if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
  if (scene.debugLayer.isVisible()) {
  scene.debugLayer.hide();
  } else {
  scene.debugLayer.show();
  }
  }
  });
  
 engine.runRenderLoop(() => {
 scene.render();
 });
 }

init();
