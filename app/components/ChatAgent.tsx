"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatAgentProps {
  onClose: () => void;
}

export default function ChatAgent({ onClose }: ChatAgentProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "你好！我是非遗文化助手小韵🎭\n\n我可以帮你：\n• 了解各种非遗文化知识\n• 介绍剪纸、刺绣、年画等传统艺术\n• 推荐适合你的非遗纹样风格\n• 解答关于AI生成的问题\n\n有什么想了解的非遗文化吗？",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    // 模拟AI回复（后续可接入真实API）
    setTimeout(() => {
      const responses: Record<string, string> = {
        剪纸: "剪纸是中国最古老的民间艺术之一，起源于汉代。主要流派有：\n• 北方剪纸：粗犷豪放\n• 南方剪纸：细腻秀丽\n• 陕西剪纸：造型夸张\n• 扬州剪纸：线条流畅",
        刺绣: "中国四大名绣：\n• 苏绣：精细雅洁\n• 湘绣：形象生动\n• 蜀绣：针法严谨\n• 粤绣：色彩富丽\n\n你想了解哪种刺绣呢？",
        年画: "年画是中国特有的绘画体裁，主要用于春节装饰。著名产地：\n• 天津杨柳青\n• 苏州桃花坞\n• 山东潍坊\n• 四川绵竹",
        你好: "你好！很高兴为你介绍非遗文化😊",
        谢谢: "不客气！有任何非遗相关问题随时问我~",
      };

      let reply = "这是个很好的问题！关于非遗文化，我还有很多可以分享的。\n\n你可以问我：\n• 某种非遗技艺的详细介绍\n• 不同地区的非遗特色\n• 如何欣赏传统纹样\n• 非遗与现代设计的结合";

      for (const [key, value] of Object.entries(responses)) {
        if (userMessage.includes(key)) {
          reply = value;
          break;
        }
      }

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-amber-500 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-white">
            <div className="font-bold">非遗助手 · 小韵</div>
            <div className="text-xs opacity-80">AI 智能体</div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2 ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === "user"
                  ? "bg-red-100"
                  : "bg-gradient-to-r from-red-500 to-amber-500"
              }`}
            >
              {msg.role === "user" ? (
                <User className="w-4 h-4 text-red-600" />
              ) : (
                <Bot className="w-4 h-4 text-white" />
              )}
            </div>
            <div
              className={`max-w-[75%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-red-600 text-white rounded-br-none"
                  : "bg-white shadow-sm rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-amber-500 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white shadow-sm rounded-2xl rounded-bl-none p-3">
              <Loader2 className="w-5 h-5 animate-spin text-red-600" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="问我关于非遗的问题..."
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:border-red-500"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
