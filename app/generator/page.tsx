'use client';

import { useState } from 'react';
import Link from "next/link";
import { Sparkles, ArrowLeft, Download, RefreshCw, ImageIcon } from "lucide-react";

const HERITAGE_STYLES = [
  { id: 'paper-cut', name: '剪纸艺术', icon: '✂️', description: '对称镂空，红色喜庆', color: 'bg-red-100 text-red-700' },
  { id: 'embroidery', name: '刺绣工艺', icon: '🧵', description: '针脚细密，色彩丰富', color: 'bg-blue-100 text-blue-700' },
  { id: 'wood-print', name: '木版年画', icon: '🎨', description: '色彩鲜艳，线条粗犷', color: 'bg-yellow-100 text-yellow-700' },
  { id: 'batik', name: '蜡染技艺', icon: '🧣', description: '蓝白相间，冰纹独特', color: 'bg-indigo-100 text-indigo-700' },
  { id: 'clay', name: '泥塑艺术', icon: '🏺', description: '造型生动，乡土气息', color: 'bg-orange-100 text-orange-700' },
];

const AI_MODELS = [
  { id: 'openai', name: 'OpenAI DALL-E', status: 'available' },
  { id: 'stability', name: 'Stability AI', status: 'available' },
  { id: 'baidu', name: '百度文心一格', status: 'coming' },
  { id: 'ali', name: '阿里通义万相', status: 'coming' },
];

export default function GeneratorPage() {
  const [selectedStyle, setSelectedStyle] = useState(HERITAGE_STYLES[0]);
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('openai');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generationHistory, setGenerationHistory] = useState<any[]>([]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    try {
      // 调用API生成纹样
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          style: selectedStyle.id,
          model: selectedModel
        })
      });

      const data = await response.json();
      
      if (data.imageUrl) {
        setGeneratedImage(data.imageUrl);
        setGenerationHistory(prev => [{
          id: Date.now(),
          prompt,
          style: selectedStyle.name,
          imageUrl: data.imageUrl,
          timestamp: new Date().toLocaleString()
        }, ...prev]);
      }
    } catch (error) {
      console.error('生成失败:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* 导航栏 */}
      <nav className="border-b border-amber-200 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-amber-700 hover:text-amber-900">
              <ArrowLeft className="w-5 h-5" />
              <span>返回首页</span>
            </Link>
            <div className="h-6 w-px bg-amber-200" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-600" />
              <span className="text-xl font-bold text-amber-900">AI纹样生成器</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 左侧：控制面板 */}
          <div className="lg:col-span-1 space-y-6">
            {/* 非遗风格选择 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
              <h3 className="text-lg font-bold text-amber-900 mb-4">选择非遗风格</h3>
              <div className="space-y-3">
                {HERITAGE_STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${
                      selectedStyle.id === style.id
                        ? 'border-amber-500 bg-amber-50'
                        : 'border-transparent hover:bg-amber-50/50'
                    }`}
                  >
                    <span className="text-2xl">{style.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-amber-900">{style.name}</p>
                      <p className="text-sm text-amber-600">{style.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* AI模型选择 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
              <h3 className="text-lg font-bold text-amber-900 mb-4">选择AI模型</h3>
              <div className="space-y-2">
                {AI_MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => model.status === 'available' && setSelectedModel(model.id)}
                    disabled={model.status !== 'available'}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                      selectedModel === model.id && model.status === 'available'
                        ? 'border-amber-500 bg-amber-50'
                        : model.status === 'available'
                        ? 'border-transparent hover:bg-amber-50/50'
                        : 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <span className="font-medium text-amber-900">{model.name}</span>
                    {model.status === 'coming' && (
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">即将上线</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧：生成区域 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 输入区域 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 ${selectedStyle.color}`}>
                <span>{selectedStyle.icon}</span>
                <span>{selectedStyle.name}</span>
              </div>
              
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={`描述您想要生成的${selectedStyle.name}纹样，例如：龙凤呈祥图案，传统红色剪纸风格...`}
                className="w-full h-32 p-4 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none text-amber-900"
              />
              
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-amber-600">
                  提示：描述越详细，生成效果越好
                </p>
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      生成中...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      生成纹样
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 生成结果 */}
            {(generatedImage || isGenerating) && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
                <h3 className="text-lg font-bold text-amber-900 mb-4">生成结果</h3>
                <div className="aspect-square max-w-md mx-auto bg-amber-50 rounded-xl flex items-center justify-center overflow-hidden">
                  {isGenerating ? (
                    <div className="text-center">
                      <RefreshCw className="w-12 h-12 text-amber-600 animate-spin mx-auto mb-4" />
                      <p className="text-amber-700">AI正在创作中，请稍候...（演示模式：实际需配置API密钥）</p>
                    </div>
                  ) : generatedImage ? (
                    <img 
                      src={generatedImage} 
                      alt="生成的纹样" 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-center text-amber-400">
                      <ImageIcon className="w-16 h-16 mx-auto mb-2" />
                      <p>生成结果将显示在这里</p>
                    </div>
                  )}
                </div>
                
                {generatedImage && (
                  <div className="flex justify-center gap-4 mt-4">
                    <button className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium">
                      <RefreshCw className="w-5 h-5" />
                      重新生成
                    </button>
                    <button className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium">
                      <Download className="w-5 h-5" />
                      下载图片
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* 生成历史 */}
            {generationHistory.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
                <h3 className="text-lg font-bold text-amber-900 mb-4">生成历史</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {generationHistory.slice(0, 6).map((item) => (
                    <div key={item.id} className="aspect-square bg-amber-50 rounded-lg overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.prompt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
