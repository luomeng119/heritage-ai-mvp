"use client";

import { useState } from "react";
import { Sparkles, Download, RefreshCw, ImageIcon } from "lucide-react";

const heritageStyles = [
  { id: "jianzhi", name: "剪纸", prompt: "traditional chinese paper-cut art" },
  { id: "xiuxiu", name: "刺绣", prompt: "chinese embroidery pattern" },
  { id: "nianhua", name: "年画", prompt: "chinese new year painting style" },
  { id: "laran", name: "蜡染", prompt: "chinese batik pattern" },
  { id: "nisu", name: "泥塑", prompt: "chinese clay figurine style" },
];

export default function PatternGenerator() {
  const [selectedStyle, setSelectedStyle] = useState(heritageStyles[0]);
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setGenerating(true);

    // 模拟生成过程（后续接入真实AI API）
    setTimeout(() => {
      // 使用占位图展示效果
      const placeholders: Record<string, string> = {
        剪纸: "https://images.unsplash.com/photo-1584650589355-e12c3643de91?w=512&h=512&fit=crop",
        刺绣: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=512&h=512&fit=crop",
        年画: "https://images.unsplash.com/photo-1548625361-7887bd6688d0?w=512&h=512&fit=crop",
        蜡染: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=512&h=512&fit=crop",
        泥塑: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=512&h=512&fit=crop",
      };

      setGeneratedImage(placeholders[selectedStyle.name] || placeholders["剪纸"]);
      setGenerating(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
      {/* Style Selection */}
      <div className="p-6 border-b bg-slate-50">
        <div className="text-sm font-medium text-gray-600 mb-3">选择非遗风格：</div>
        <div className="flex flex-wrap gap-2">
          {heritageStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedStyle.id === style.id
                  ? "bg-red-600 text-white"
                  : "bg-white border hover:border-red-600 hover:text-red-600"
              }`}
            >
              {style.name}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            描述你想要的图案：
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={`例如：${selectedStyle.name}风格的龙凤图案，红色为主，寓意吉祥如意...`}
            className="w-full px-4 py-3 border rounded-xl resize-none h-24 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleGenerate}
            disabled={generating || !prompt.trim()}
            className="flex-1 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
          >
            {generating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                生成中...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                生成{selectedStyle.name}纹样
              </>
            )}
          </button>

          {generatedImage && (
            <button
              onClick={() => setGeneratedImage(null)}
              className="px-4 py-3 border rounded-xl hover:bg-slate-50 transition"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Result Area */}
      {(generatedImage || generating) && (
        <div className="p-6 border-t bg-slate-50">
          <div className="text-sm font-medium text-gray-600 mb-3">生成结果：</div>
          <div className="relative aspect-square max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
            {generating ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <RefreshCw className="w-12 h-12 animate-spin text-red-600 mx-auto mb-4" />
                  <p className="text-gray-600">AI正在创作{selectedStyle.name}纹样...\n</p>
                  <p className="text-sm text-gray-400 mt-2">（演示模式，后续接入真实AI API）</p>
                </div>
              </div>
            ) : generatedImage ? (
              <>
                <img
                  src={generatedImage}
                  alt="Generated pattern"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium hover:bg-gray-100 transition">
                    <Download className="w-4 h-4" />
                    下载图片
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}

      {/* API Status */}
      <div className="px-6 py-3 bg-amber-50 border-t text-xs text-amber-700">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          <span>当前为演示模式，已预留 OpenAI / Claude / 百度文心 / 阿里通义 API 接口</span>
        </div>
      </div>
    </div>
  );
}
