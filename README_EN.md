# Drowning Illusion 🌊

[中文](README.md) | [English](README_EN.md)

An interactive 3D particle system based on Three.js. Interact with the scene through mouse movements and experience the visualization of emotions. Let particles flow with your mood and feel the fusion of digital and emotional expression.

![Project Cover](https://img.shields.io/badge/Three.js-Interactive-blue?style=for-the-badge&logo=three.js)
![Tech Stack](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

## ✨ Features

- 🎨 **Multiple Mood Modes** - Four different visual themes expressing various emotional states
- 🌊 **Fluid Particle Animation** - Dynamic scene composed of 5000 particles
- 🖱️ **Interactive Experience** - Mouse control affects particle movement trajectories
- 📱 **Responsive Design** - Perfect adaptation to various screen sizes
- ⚡ **Performance Monitoring** - Real-time FPS display ensuring smooth experience
- 🎮 **Intuitive Controls** - Support for mouse drag, zoom and other 3D navigation

## 🌌 Mood Color Palette

### 🌌 Default - Pure Space
- White particles floating in black void
- Clean and pure visual experience

### 💙 Tranquil - Deep Sea Meditation
- Light blue particles with deep blue background
- Creating a calm and peaceful atmosphere

### 🔥 Turbulent - Fiery Rapids
- Orange-red particles with dark gray background
- Expressing intense and surging emotions

### 💜 Ethereal - Void and Misty
- Light purple particles with deep blue background
- Creating a dreamy and ethereal mood

## 🚀 Quick Start

### Online Experience
Simply open the `index.html` file to experience it in your browser.

### Local Setup
```bash
# 1. Clone the project
git clone https://github.com/zym9863/drowning-illusion.git

# 2. Enter project directory
cd drowning-illusion

# 3. Run with local server (recommended)
# Method 1: Using Python
python -m http.server 8000

# Method 2: Using Node.js
npx serve .

# Method 3: Using Live Server (VS Code extension)
# 4. Open browser and visit http://localhost:8000
```

### System Requirements
- **Modern Browser** - Support for ES6+ and WebGL
- **Internet Connection** - Required to load Three.js library (using CDN)

## 🎮 Control Guide

| Operation | Function |
|-----------|----------|
| **Mouse Movement** | Affects particle movement trajectories |
| **Mouse Drag** | Rotate 3D perspective |
| **Scroll Zoom** | Adjust viewing distance |
| **Touch Operations** | Mobile touch control support |
| **Mood Switching** | Experience different visual effects |
| **Generate Animation** | Trigger special animation effects |

## 🛠️ Tech Stack

### Core Technologies
- **Three.js** `0.164.1` - 3D graphics rendering engine
- **WebGL** - Hardware-accelerated graphics rendering
- **ES6+ JavaScript** - Modern JavaScript features

### Key Features
- **Particle System** - BufferGeometry performance optimization
- **Orbit Controls** - OrbitControls for 3D navigation
- **Shaders** - Custom materials and blending modes
- **Performance Optimization** - Frame rate monitoring and memory management

### File Structure
```
drowning-illusion/
├── index.html          # Main page file
├── main.js            # Core JavaScript logic
├── style.css          # Stylesheet
├── README.md          # Project documentation (Chinese)
└── README_EN.md       # Project documentation (English)
```

## 📁 Project Structure Details

### `index.html`
- Page structure and UI components
- Three.js module import configuration
- Responsive layout design

### `main.js`
- 3D scene initialization
- Particle system creation and animation
- User interaction handling
- Performance monitoring system

### `style.css`
- Modern UI design
- Glassmorphism effects
- Responsive layout
- Animation transitions

## 🎨 Design Philosophy

### Visual Design
- **Minimalism** - Clean and elegant interface design
- **Tech Aesthetic** - Glassmorphism effects and gradient colors
- **Immersive** - Full-screen 3D experience

### Interaction Design
- **Intuitive** - Natural mouse interactions
- **Responsive** - Immediate visual feedback
- **Exploratory** - Encouraging active user exploration

### Emotional Expression
- **Color Psychology** - Different colors corresponding to different emotions
- **Dynamic Aesthetics** - Flowing particles expressing emotional flow
- **Personalization** - Users can choose visual themes that match their mood

## ⚡ Performance Optimization

### Rendering Optimization
- Using `BufferGeometry` to improve geometry performance
- `AdditiveBlending` for particle overlay effects
- Dynamic FPS monitoring with color indicators

### Memory Management
- Timely release of old geometry resources
- Optimized particle count (5000) balancing visual effects and performance
- Using `requestAnimationFrame` for animation loop optimization

### Responsive Design
- Mobile adaptation and touch support
- Dynamic UI element sizing
- Adaptive pixel ratio

## 🔧 Customization and Extension

### Adding New Mood Themes
```javascript
// Add new themes to the moodPalettes object
const moodPalettes = {
    // Existing themes...
    custom: {
        particleColor: 0x00ff00,  // Custom particle color
        backgroundColor: 0x001100, // Custom background color
        fogColor: 0x001100,       // Custom fog color
    }
};
```

### Adjusting Particle Count
```javascript
// Modify the particleCount variable
const particleCount = 10000; // Increase to 10000 particles
```

### Custom Animation Effects
```javascript
// Add new animation logic in the animateParticles function
function animateParticles() {
    // Add your custom animation code
}
```

## 🌟 Future Plans

- [ ] 🎵 **Audio Visualization** - Integrate audio analysis, let particles dance with music
- [ ] 🎨 **More Themes** - Add seasonal, time-based theme variations
- [ ] 💾 **User Settings** - Save user preference settings
- [ ] 📱 **PWA Support** - Add offline functionality and app installation
- [ ] 🎮 **Gesture Control** - Support richer touch gestures
- [ ] 🌐 **Multi-language** - Internationalization support

## 🤝 Contributing

Welcome to contribute code, suggestions, or report issues!

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** - Powerful 3D graphics library
- **Google Fonts** - Beautiful Inter font
- **Open Source Community** - Countless inspiration and technical support

---

**Let digital art express the inner world, find emotional resonance in the ocean of pixels.** 🌊✨
