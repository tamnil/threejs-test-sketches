'use strict'



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    115,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(7, 3, 1);
var material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add( cube );

camera.position.z = 20;


var light = new THREE.AmbientLight( 0xaaaaaa ); // soft white light
scene.add( light );


var planeGeometry = new THREE.PlaneBufferGeometry( 20, 20, 32, 32 );
var planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
scene.add( plane )


var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
var material1 = new THREE.LineBasicMaterial({ color: 0x11aaff });
var geometry = new THREE.Geometry();
var geometry1 = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));
geometry1.vertices.push(new THREE.Vector3(0, 0, 0));
geometry1.vertices.push(new THREE.Vector3(10, 10, 0));
geometry1.vertices.push(new THREE.Vector3(10, 10, 10));
// geometry1.vertices.push(new THREE.Vector3(10, 5, 10));
var line = new THREE.Line(geometry, material);
var line1 = new THREE.Line(geometry1, material1);

console.log(line);

scene.add(line);
scene.add(line1);

var animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    plane.rotation.y += 0.04;

    renderer.render(scene, camera);
};

animate();
