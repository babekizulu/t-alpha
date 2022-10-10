//libs
import * as THREE from 'three';
const {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, DirectionalLight} = THREE;
//style
import './scss/App.scss';
//dom elements
const canvas = document.querySelector('#canvas');
//instantiate a renderer
const renderer = new WebGLRenderer({canvas});
//perspective camera args:
const fieldOfView = 75;
const aspectRatio = 2;
const near = 0.1;
const far = 5;
//instantiate a perspective camera 
const camera = new PerspectiveCamera(fieldOfView, aspectRatio, near, far);
//set camera position
camera.position.z = 2;
//instantiate a scene
const scene = new Scene();
//geometry args:
const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
//instantiate a geometry
const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);
//instantiate a material 
const material = new MeshBasicMaterial({color: "#44aa88"});
//instantiate a mesh
const cube = new Mesh(geometry, material);
//add mesh to the scene
scene.add(cube);
//render the scene
renderer.render(scene, camera);
//create a render loop 
const render = (time) => {
    //convert time to milliseconds
    time *= 0.001;
    //set x and y rotation of mesh to time
    cube.rotation.x = time;
    cube.rotation.y = time;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
//call this once to start the animation loop
// - browser will call the callback and pass in the time parameter,
//   so that's why we haven't called the render function, it will 
//   automatically be called.
requestAnimationFrame(render);