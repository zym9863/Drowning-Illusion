import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let scene, camera, renderer, controls;
let particles, particleSystem;
const particleCount = 5000;

// 性能监控变量
let frameCount = 0;
let lastTime = performance.now();
let fps = 60;

// 心绪调色板定义
const moodPalettes = {
    default: {
        particleColor: 0xffffff,
        backgroundColor: 0x000000,
        fogColor: 0x000000,
    },
    serene: {
        particleColor: 0xADD8E6, // 淡蓝色
        backgroundColor: 0x123456, // 深蓝
        fogColor: 0x123456,
    },
    turbulent: {
        particleColor: 0xFF4500, // 橙红色
        backgroundColor: 0x222222, // 深灰色
        fogColor: 0x222222,
    },
    ethereal: {
        particleColor: 0xE6E6FA, // 淡紫色
        backgroundColor: 0x000020, // 深邃蓝
        fogColor: 0x000020,
    }
};

let currentMood = 'default';

function init() {
    // 场景
    scene = new THREE.Scene();
    const currentPalette = moodPalettes[currentMood];
    scene.background = new THREE.Color(currentPalette.backgroundColor);
    scene.fog = new THREE.FogExp2(currentPalette.fogColor, 0.002);

    // 相机
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // 渲染器
    const canvas = document.querySelector('#c');
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // 控制器
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // 光照
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    // 创建粒子系统
    createParticles();

    // 初始化UI
    initializeUI();

    // 事件监听
    window.addEventListener('resize', onWindowResize, false);
    document.getElementById('mood-select').addEventListener('change', onMoodChange);
    document.getElementById('generate-animation').addEventListener('click', generateAnimation);
    document.addEventListener('mousemove', onMouseMove, false);

    animate();
}

function initializeUI() {
    // 初始化统计信息
    updateMoodDisplay();
    updateParticleCount();
    
    // 初始化帮助按钮
    const helpToggle = document.getElementById('help-toggle');
    if (helpToggle) {
        helpToggle.addEventListener('click', toggleHelp);
    }
}

function createParticles() {
    if (particleSystem) {
        scene.remove(particleSystem);
        particles.dispose(); // 释放旧的几何体资源
    }

    const currentPalette = moodPalettes[currentMood];
    particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const particleColor = new THREE.Color(currentPalette.particleColor);

    for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random() - 0.5) * 100;
        const z = (Math.random() - 0.5) * 100;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        colors[i * 3] = particleColor.r;
        colors[i * 3 + 1] = particleColor.g;
        colors[i * 3 + 2] = particleColor.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
    });

    particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMoodChange(event) {
    currentMood = event.target.value;
    const currentPalette = moodPalettes[currentMood];

    scene.background = new THREE.Color(currentPalette.backgroundColor);
    scene.fog.color = new THREE.Color(currentPalette.fogColor);

    // 更新粒子颜色
    const particleColors = particleSystem.geometry.attributes.color;
    const newParticleColor = new THREE.Color(currentPalette.particleColor);
    for (let i = 0; i < particleCount; i++) {
        particleColors.setXYZ(i, newParticleColor.r, newParticleColor.g, newParticleColor.b);
    }
    particleColors.needsUpdate = true;

    // 更新UI显示
    updateMoodDisplay();
}

function updateMoodDisplay() {
    const moodNames = {
        'default': '默认',
        'serene': '宁静',
        'turbulent': '汹涌',
        'ethereal': '空灵'
    };
    const moodElement = document.getElementById('current-mood');
    if (moodElement) {
        moodElement.textContent = moodNames[currentMood];
    }
}

function updateParticleCount() {
    const countElement = document.getElementById('particle-count');
    if (countElement) {
        countElement.textContent = particleCount.toLocaleString();
    }
}

function updateFPS() {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) { // 每秒更新一次
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
        
        const fpsElement = document.getElementById('fps-counter');
        if (fpsElement) {
            fpsElement.textContent = fps;
            
            // 根据FPS改变颜色
            if (fps >= 50) {
                fpsElement.style.color = '#00ff88';
            } else if (fps >= 30) {
                fpsElement.style.color = '#ffaa00';
            } else {
                fpsElement.style.color = '#ff4444';
            }
        }
    }
}

function toggleHelp() {
    // 简单的帮助切换功能，可以扩展为更复杂的帮助系统
    console.log('帮助功能触发');
}

function generateAnimation() {
    // 改进的动画生成逻辑
    console.log('生成动画...');
    
    // 添加视觉反馈
    const button = document.getElementById('generate-animation');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<span class="button-text">🎬 生成中...</span>';
    button.disabled = true;
    
    // 模拟动画生成过程
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
        
        // 显示成功消息
        showNotification('🎉 动画生成完成！', 'success');
    }, 2000);
}

function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px 25px;
        background: ${type === 'success' ? 'rgba(0, 255, 136, 0.9)' : 'rgba(120, 119, 198, 0.9)'};
        color: white;
        border-radius: 10px;
        font-size: 0.9em;
        font-weight: 500;
        z-index: 1000;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: all 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // 触发显示动画
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    // 自动移除
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

let mouseX = 0, mouseY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

function onMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / 100;
    mouseY = (event.clientY - windowHalfY) / 100;
}

function animateParticles() {
    if (particleSystem) {
        const time = Date.now() * 0.0005;
        const positions = particleSystem.geometry.attributes.position;

        for (let i = 0; i < particleCount; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;
            const iz = i * 3 + 2;

            // 基础漂浮效果
            positions.array[iy] += Math.sin(time + positions.array[ix] * 0.5) * 0.01;
            positions.array[ix] += Math.cos(time + positions.array[iz] * 0.5) * 0.01;

            // 根据鼠标位置影响粒子
            if (currentMood === 'turbulent') {
                positions.array[ix] += mouseX * 0.05 * (Math.random() - 0.5);
                positions.array[iy] += mouseY * 0.05 * (Math.random() - 0.5);
                positions.array[iz] += (mouseX + mouseY) * 0.02 * (Math.random() - 0.5);
            } else if (currentMood === 'serene') {
                positions.array[ix] += Math.sin(mouseY * 0.1 + time) * 0.005;
                positions.array[iy] += Math.cos(mouseX * 0.1 + time) * 0.005;
            } else { // default and ethereal
                 positions.array[iy] += Math.sin(time + i * 0.1) * 0.005;
                 positions.array[ix] += Math.cos(time + i * 0.05) * 0.005;
            }

            // 边界处理，让粒子循环
            if (positions.array[iy] < -50) positions.array[iy] = 50;
            if (positions.array[iy] > 50) positions.array[iy] = -50;
            if (positions.array[ix] < -50) positions.array[ix] = 50;
            if (positions.array[ix] > 50) positions.array[ix] = -50;
            if (positions.array[iz] < -50) positions.array[iz] = 50;
            if (positions.array[iz] > 50) positions.array[iz] = -50;
        }
        positions.needsUpdate = true;

        // 场景整体微弱旋转，模拟眩晕或漂浮
        if (currentMood === 'ethereal' || currentMood === 'turbulent') {
            particleSystem.rotation.y += mouseX * 0.0001;
            particleSystem.rotation.x += mouseY * 0.0001;
        } else {
            particleSystem.rotation.y += 0.0001;
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    animateParticles();
    updateFPS();
    renderer.render(scene, camera);
}

init();
