import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

// 1. 씬
const scene = new THREE.Scene();

// 2. 카메라
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. 렌더러
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. 박스 만들기
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. 애니메이션
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// Load Font and create 3D text
const loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font){
    const textGeometry = new THREE.TextGeometry('Jiwun Kim', {
        font: font,
        size: 2,
        height: 0.5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    textGeometry.center(); // 화면 중앙
    scene.add(textMesh);

    // Animate text rotation
    function animate(){
        requestAnimationFrame(animate);
        textMesh.rotation.y += 0.01;
        textMesh.rotation.x += 0.005;
        renderer.render(scene, camera);
    }
    animate();
});

// Camera position
camera.position.z = 5;

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
// Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Light
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(50, 50, 50);
scene.add(light);

// 3D Text
const loader = new THREE.FontLoader();
loader.load(
    'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
    function (font) {
        const geometry = new THREE.TextGeometry('Jiwun Kim', {
            font: font,
            size: 10,
            height: 2,
            curveSegments: 12,
        });

        const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        const textMesh = new THREE.Mesh(geometry, material);

        geometry.center(); // 가운데 정렬
        scene.add(textMesh);

        // Animation
        function animate() {
            requestAnimationFrame(animate);
            textMesh.rotation.y += 0.01;
            textMesh.rotation.x += 0.005;
            renderer.render(scene, camera);
        }
        animate();
    }
);

// Window resize 대응
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import { FontLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/geometries/TextGeometry.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js';

// 1. Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

// 3. Light
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(50, 50, 50);
scene.add(light);

// 4. Load Font and Create 3D Text
const loader = new FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font){
    const textGeometry = new TextGeometry('Jiwun Kim', {
        font: font,
        size: 10,
        height: 2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.5,
        bevelSize: 0.3,
        bevelSegments: 5
    });

    const textMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    textGeometry.center(); // 가운데 정렬
    scene.add(textMesh);

    // Animate text
    function animateText() {
        requestAnimationFrame(animateText);
        textMesh.rotation.y += 0.01;
        textMesh.rotation.x += 0.005;
        renderer.render(scene, camera);
    }
    animateText();
});

// 5. Window Resize 대응
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/geometries/TextGeometry.js';

// Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

// Light
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(50, 50, 50);
scene.add(light);

// 3D Text
const loader = new FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font){
    const textGeometry = new TextGeometry('Jiwun Kim', {
        font: font,
        size: 10,
        height: 2,
        curveSegments: 12,
    });
    textGeometry.center(); // 화면 중앙

    const textMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    scene.add(textMesh);

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        textMesh.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});

// Window resize 대응
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
