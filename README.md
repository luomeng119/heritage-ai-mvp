# AI+非遗 MVP Demo - 纹韵AI

AI赋能非遗文化传承的MVP演示网站。

## 🎯 项目特点

- **AI智能体**: 内置非遗文化助手"小韵"，24小时解答非遗相关问题
- **纹样生成器**: 支持剪纸、刺绣、年画、蜡染、泥塑等非遗风格的AI生成
- **多模型支持**: 预留OpenAI、Claude、百度文心、阿里通义等API接口
- **响应式设计**: 支持PC和移动端访问

## 🚀 快速开始

### 1. 安装依赖

```bash
cd mvp-demo/my-app
npm install
```

### 2. 配置环境变量

```bash
cp .env.example .env.local
# 编辑 .env.local 填入你的API密钥
```

### 3. 运行开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

## 📁 项目结构

```
my-app/
├── app/
│   ├── components/         # React组件
│   │   ├── ChatAgent.tsx   # AI智能体组件
│   │   └── PatternGenerator.tsx  # 纹样生成器
│   ├── api/                # API路由
│   │   ├── chat/           # 智能体对话API
│   │   └── generate/       # 图像生成API
│   ├── page.tsx            # 首页
│   ├── layout.tsx          # 根布局
│   └── globals.css         # 全局样式
├── public/                 # 静态资源
└── package.json
```

## 🔌 API接口预留

### 1. 智能体对话 API

```
POST /api/chat
Content-Type: application/json

{
  "message": "介绍一下剪纸艺术",
  "model": "openai"  // 可选: openai, anthropic, baidu, alibaba
}
```

### 2. 纹样生成 API

```
POST /api/generate
Content-Type: application/json

{
  "prompt": "龙凤呈祥图案",
  "style": "jianzhi",     // jianzhi/xiuxiu/nianhua/laran/nisu
  "model": "openai",      // 预留: openai/dalle/midjourney/baidu/alibaba
  "width": 1024,
  "height": 1024
}
```

## 🎨 支持的非遗类型

| 类型 | ID | 描述 |
|------|-----|------|
| 剪纸 | jianzhi | 中国传统民间艺术，红色纸张镂空图案 |
| 刺绣 | xiuxiu | 苏绣、湘绣、蜀绣、粤绣四大名绣 |
| 年画 | nianhua | 春节装饰用传统绘画，寓意吉祥 |
| 蜡染 | laran | 苗族传统印染技艺，蓝白相间 |
| 泥塑 | nisu | 天津泥人张等传统泥塑艺术 |

## 🔧 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **AI SDK**: Vercel AI SDK
- **UI组件**: shadcn/ui + Lucide Icons

## 📝 后续接入计划

### Phase 1 - 基础接入
- [ ] 接入 OpenAI DALL-E 3 图像生成
- [ ] 接入 Claude/GPT 对话API
- [ ] 用户登录系统

### Phase 2 - 多模型扩展
- [ ] 接入百度文心一言 & 文心一格
- [ ] 接入阿里通义千问 & 万相
- [ ] 接入讯飞星火

### Phase 3 - 功能增强
- [ ] 真实非遗纹样数据集训练
- [ ] 高清图片下载
- [ ] 用户作品 gallery
- [ ] 非遗大师入驻

## ⚠️ 当前状态

**演示模式**: 当前版本为前端演示，AI对话和图像生成为模拟数据。
API接口已预留，配置API密钥后即可接入真实AI模型。

## 📄 许可证

MIT License
