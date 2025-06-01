# 悬溺幻境 (Drowning Illusion) 🌊

[中文](README.md) | [English](README_EN.md)

一个基于 Three.js 的交互式3D粒子系统，通过鼠标与场景互动，体验情感的视觉化。让粒子随着你的心境流淌，感受数字与情感的交融。

![项目封面](https://img.shields.io/badge/Three.js-Interactive-blue?style=for-the-badge&logo=three.js)
![技术栈](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![状态](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

## ✨ 特性

- 🎨 **多重心境模式** - 四种不同的视觉主题，表达不同的情感状态
- 🌊 **流体粒子动画** - 5000个粒子构成的动态场景
- 🖱️ **交互式体验** - 鼠标控制影响粒子运动轨迹
- 📱 **响应式设计** - 完美适配各种屏幕尺寸
- ⚡ **性能监控** - 实时FPS显示，确保流畅体验
- 🎮 **直观操控** - 支持鼠标拖拽、缩放等3D导航

## 🌌 心境调色板

### 🌌 默认 - 纯净空间
- 白色粒子在黑色虚空中漂浮
- 简洁纯净的视觉体验

### 💙 宁静 - 深海冥想
- 淡蓝色粒子，深蓝背景
- 营造平静安详的氛围

### 🔥 汹涌 - 炽热激流
- 橙红色粒子，深灰背景
- 表达激烈澎湃的情感

### 💜 空灵 - 虚无缥缈
- 淡紫色粒子，深邃蓝背景
- 创造梦幻缥缈的意境

## 🚀 快速开始

### 在线体验
直接打开 `index.html` 文件即可在浏览器中体验。

### 本地运行
```bash
# 1. 克隆项目
git clone https://github.com/zym9863/drowning-illusion.git

# 2. 进入项目目录
cd drowning-illusion

# 3. 使用本地服务器运行（推荐）
# 方法1: 使用 Python
python -m http.server 8000

# 方法2: 使用 Node.js
npx serve .

# 方法3: 使用 Live Server（VS Code扩展）
# 4. 打开浏览器访问 http://localhost:8000
```

### 系统要求
- **现代浏览器** - 支持 ES6+ 和 WebGL
- **网络连接** - 需要加载 Three.js 库（使用CDN）

## 🎮 操作指南

| 操作 | 功能 |
|------|------|
| **鼠标移动** | 影响粒子运动轨迹 |
| **鼠标拖拽** | 旋转3D视角 |
| **滚轮缩放** | 调整视角距离 |
| **触摸操作** | 移动端支持触摸控制 |
| **心境切换** | 体验不同视觉效果 |
| **生成动画** | 触发特殊动画效果 |

## 🛠️ 技术栈

### 核心技术
- **Three.js** `0.164.1` - 3D图形渲染引擎
- **WebGL** - 硬件加速图形渲染
- **ES6+ JavaScript** - 现代JavaScript特性

### 主要特性
- **粒子系统** - BufferGeometry 优化性能
- **轨道控制** - OrbitControls 实现3D导航
- **着色器** - 自定义材质和混合模式
- **性能优化** - 帧率监控和内存管理

### 文件结构
```
drowning-illusion/
├── index.html          # 主页面文件
├── main.js            # 核心JavaScript逻辑
├── style.css          # 样式表
└── README.md          # 项目文档
```

## 📁 项目结构详解

### `index.html`
- 页面结构和UI组件
- Three.js模块导入配置
- 响应式布局设计

### `main.js`
- 3D场景初始化
- 粒子系统创建和动画
- 用户交互处理
- 性能监控系统

### `style.css`
- 现代化UI设计
- 毛玻璃效果
- 响应式布局
- 动画过渡效果

## 🎨 设计理念

### 视觉设计
- **极简主义** - 简洁优雅的界面设计
- **科技感** - 毛玻璃效果和渐变色彩
- **沉浸式** - 全屏3D体验

### 交互设计
- **直觉性** - 自然的鼠标交互
- **响应性** - 即时的视觉反馈
- **探索性** - 鼓励用户主动探索

### 情感表达
- **色彩心理学** - 不同颜色对应不同情绪
- **动态美学** - 流动的粒子表达情感流动
- **个性化** - 用户可选择符合心境的视觉主题

## ⚡ 性能优化

### 渲染优化
- 使用 `BufferGeometry` 提高几何体性能
- `AdditiveBlending` 实现粒子叠加效果
- 动态FPS监控和颜色指示

### 内存管理
- 适时释放旧的几何体资源
- 优化粒子数量（5000个）平衡视觉效果和性能
- 使用 `requestAnimationFrame` 优化动画循环

### 响应式设计
- 移动端适配和触摸支持
- 动态调整UI元素大小
- 自适应像素比率

## 🔧 自定义和扩展

### 添加新的心境主题
```javascript
// 在 moodPalettes 对象中添加新主题
const moodPalettes = {
    // 现有主题...
    custom: {
        particleColor: 0x00ff00,  // 自定义粒子颜色
        backgroundColor: 0x001100, // 自定义背景色
        fogColor: 0x001100,       // 自定义雾效颜色
    }
};
```

### 调整粒子数量
```javascript
// 修改 particleCount 变量
const particleCount = 10000; // 增加到10000个粒子
```

### 自定义动画效果
```javascript
// 在 animateParticles 函数中添加新的动画逻辑
function animateParticles() {
    // 添加你的自定义动画代码
}
```

## 🌟 未来计划

- [ ] 🎵 **音频可视化** - 集成音频分析，让粒子随音乐律动
- [ ] 🎨 **更多主题** - 添加季节、时间等主题变化
- [ ] 💾 **用户设置** - 保存用户偏好设置
- [ ] 📱 **PWA支持** - 添加离线功能和应用安装
- [ ] 🎮 **手势控制** - 支持更丰富的触摸手势
- [ ] 🌐 **多语言** - 国际化支持

## 🤝 贡献指南

欢迎贡献代码、提出建议或报告问题！

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- **Three.js** - 强大的3D图形库
- **Google Fonts** - 优美的Inter字体
- **开源社区** - 无数的灵感和技术支持

---

**让数字艺术表达内心世界，在像素的海洋中寻找情感的共鸣。** 🌊✨
