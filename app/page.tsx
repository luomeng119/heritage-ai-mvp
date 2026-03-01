"use client";

import { useState } from "react";
import { Sparkles, Palette, MessageCircle, Share2, Github } from "lucide-react";
import Link from "next/link";
import ChatAgent from "./components/ChatAgent";
import PatternGenerator from "./components/PatternGenerator";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-red-500" />,
      title: "AI纹样生成",
      desc: "输入描述，AI生成剪纸、刺绣等传统纹样",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-amber-500" />,
      title: "非遗智能体",
      desc: "24小时非遗文化问答助手",
    },
    {
      icon: <Palette className="w-8 h-8 text-emerald-500" />,
      title: "多模型支持",
      desc: "支持OpenAI、Claude、百度、阿里等AI模型",
    },
  ];

  const heritageTypes = [
    { name: "剪纸", color: "bg-red-100 text-red-700", desc: "中国传统民间艺术" },
    { name: "刺绣", color: "bg-pink-100 text-pink-700", desc: "苏绣湘绣蜀绣粤绣" },
    { name: "年画", color: "bg-amber-100 text-amber-700", desc: "门神福字迎新春" },
    { name: "蜡染", color: "bg-blue-100 text-blue-700", desc: "苗族传统技艺" },
    { name: "泥塑", color: "bg-orange-100 text-orange-700", desc: "天津泥人张等" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-red-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
                纹韵AI
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#generator" className="text-gray-600 hover:text-red-600 transition">纹样生成</Link>
              <Link href="#heritage" className="text-gray-600 hover:text-red-600 transition">非遗百科</Link>
              <button
                onClick={() => setShowChat(!showChat)}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
              >
                <MessageCircle className="w-4 h-4" />
                问非遗助手
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-amber-500 to-red-600 bg-clip-text text-transparent">
              AI 赋能非遗文化传承
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            使用人工智能技术生成传统非遗纹样，让千年文化在数字时代焕发新生
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#generator"
              className="px-8 py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              开始创作
            </a>
            <button
              onClick={() => setShowChat(true)}
              className="px-8 py-4 border-2 border-gray-200 rounded-full font-medium hover:border-red-600 hover:text-red-600 transition"
            >
              咨询非遗助手
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pattern Generator */}
      <section id="generator" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI 纹样生成器</h2>
            <p className="text-gray-600">选择非遗风格，描述你想要的图案，AI为你生成</p>
          </div>
          <PatternGenerator />
        </div>
      </section>

      {/* Heritage Types */}
      <section id="heritage" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">支持的非遗类型</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {heritageTypes.map((type) => (
              <div
                key={type.name}
                className={`p-6 rounded-xl text-center cursor-pointer hover:scale-105 transition ${type.color}`}
              >
                <div className="text-2xl font-bold mb-1">{type.name}</div>
                <div className="text-sm opacity-80">{type.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Providers */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">多模型支持</h2>
          <p className="text-gray-600 mb-8">预留多厂商API接口，灵活切换AI模型</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["OpenAI GPT-4", "Claude 3", "百度文心", "阿里通义", "讯飞星火", "智谱GLM"].map((model) => (
              <span
                key={model}
                className="px-4 py-2 bg-white border rounded-full text-sm text-gray-600"
              >
                {model}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-red-600" />
            <span className="font-bold">纹韵AI</span>
          </div>
          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-red-600 transition">关于我们</a>
            <a href="#" className="hover:text-red-600 transition">使用条款</a>
            <a href="#" className="hover:text-red-600 transition">隐私政策</a>
          </div>
          <div className="flex gap-4">
            <Github className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            <Share2 className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>
        </div>
      </footer>

      {/* Chat Agent */}
      {showChat && <ChatAgent onClose={() => setShowChat(false)} />}
    </div>
  );
}
