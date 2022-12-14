/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require("fs");
const THREE = require('../lib/three');
const join = require("path").join;
const drawCanvasThree = () => {
  /**
   * Stage size.
   */

  var width = 320;
  var height = 240;

  /**
   * Renderer.
   */

  var renderer = new THREE.CanvasRenderer();
  renderer.setSize(width, height);

  /**
   * Camera.
   */

  var camera = new THREE.PerspectiveCamera(75, width / height, 1, 3000);
  camera.position.z = 500;

  /**
   * Cube with texture.
   */

  var map = THREE.ImageUtils.loadTexture(join(__dirname, "lenna.jpg"));
  var material = new THREE.MeshLambertMaterial({ map: map });
  var geom = new THREE.CubeGeometry(200, 200, 200);
  var mesh = new THREE.Mesh(geom, material);

  mesh.rotation.x = 0.1;
  mesh.rotation.y = 0.5;
  mesh.rotation.z = 0.5;

  /**
   * Scene.
   */

  var scene = new THREE.Scene();
  scene.add(camera);
  scene.add(mesh);

  /**
   * Rendering.
   */

  renderer.render(scene, camera);

  /**
   * Output result.
   */
  console.log(renderer.domElement);
  // renderer.domElement.toBuffer(function (err, buf) {
  //   fs.writeFile(join(__dirname, "out.png"), buf, function (err) {
  //     if (err) throw err;
  //     console.log("see output result file: out.png");
  //   });
  // });
  const imgBuffer = renderer.domElement.toBuffer("image/png");
    fs.writeFileSync("./resources/drawnImage.png", imgBuffer);
};
module.exports = drawCanvasThree;
