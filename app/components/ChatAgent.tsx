'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SYSTEM_PROMPT = `你是"AI赋能非遗知识平台"的非遗文化智能助手，专注于中国传统非物质文化遗产的传播与普及。

你的知识覆盖：
1. 十大门类：民间文学、传统音乐、传统舞蹈、传统戏剧、曲艺、传统体育游艺杂技、传统美术、传统技艺、传统医药、民俗
2. 64个代表性国家级非遗项目（涵盖所有门类）
3. 3610个子项详细资料

回答风格：
- 专业、准确、有温度
- 引用具体项目时会说明所属门类和批次
- 主动推荐相关项目或文化知识
- 鼓励用户深入了解非遗文化

体现AI技术与传统文化融合的特色。`;

export function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '你好！我是AI非遗助手🎭\n\n我可以帮您：\n• 了解十大门类非遗知识\n• 查询64个代表性国家级项目\n• 探索传统文化的魅力\n\n有什么想了解的非遗文化吗？',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // 构建消息列表
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.slice(-5).map(m => ({ role: m.role, content: m.content })),
        { role: 'user', content: userMessage.content }
      ];

      // 调用 DeepSeek API
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-8a7cf95b84ad455482aeecd55e4bccaa'
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 2000
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const reply = data.choices[0]?.message?.content || '抱歉，我暂时无法回答这个问题。';

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: reply,
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      // 使用模拟回复
      const mockReply = generateMockReply(userMessage.content);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: mockReply,
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const generateMockReply = (message: string): string => {
    const keywords: Record<string, string> = {
      '剪纸': '剪纸是中国传统美术类非遗项目，2006年列入第一批国家级名录。著名剪纸流派包括蔚县剪纸、扬州剪纸、安塞剪纸等。',
      '年画': '木版年画是中国传统美术的重要门类，2006年列入第一批国家级名录。五大年画产地：天津杨柳青、苏州桃花坞、山东杨家埠、四川绵竹、河南朱仙镇。',
      '刺绣': '中国四大名绣分别是苏绣、湘绣、蜀绣、粤绣，均于2006年列入第一批国家级名录。',
      '泥塑': '泥塑是传统美术类非遗，以天津泥人张最为著名，创始于清代道光年间。',
      '昆曲': '昆曲是中国最古老的剧种之一，2001年被联合国教科文组织列为"人类口述和非物质遗产代表作"，2006年列入第一批国家级名录。',
      '京剧': '京剧是中国影响最大的戏曲剧种，被誉为"国粹"，2010年被列入联合国教科文组织人类非物质文化遗产代表作名录。',
      '古琴': '古琴是中国最古老的弹拨乐器之一，有三千年以上的历史，2003年被联合国教科文组织列为"人类口述和非物质遗产代表作"。',
      '太极拳': '太极拳是中国传统武术的重要组成部分，2020年被列入联合国教科文组织人类非物质文化遗产代表作名录。',
      '十大': '国家级非遗名录分为十大门类：民间文学（Ⅰ）、传统音乐（Ⅱ）、传统舞蹈（Ⅲ）、传统戏剧（Ⅳ）、曲艺（Ⅴ）、传统体育游艺杂技（Ⅵ）、传统美术（Ⅶ）、传统技艺（Ⅷ）、传统医药（Ⅸ）、民俗（Ⅹ）。',
      '春节': '春节是中国最隆重的传统节日，2006年列入第一批国家级非物质文化遗产名录。'
    };
    
    for (const [key, reply] of Object.entries(keywords)) {
      if (message.includes(key)) {
        return reply + '\n\n我是AI非遗助手，很高兴为您介绍中国传统文化！';
      }
    }
    
    return '感谢您的提问！作为AI非遗助手，我可以为您介绍中国十大门类的非物质文化遗产。我们平台目前已收录64个代表性国家级非遗项目、涵盖所有十大门类。请问您对哪个门类或项目感兴趣？';
  };

  return (
    <>
      {/* 悬浮按钮 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-red-500/30 hover:scale-105 transition-all duration-300 group flex items-center gap-2"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-medium">AI助手</span>
        </button>
      )}

      {/* 聊天窗口 */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">AI非遗助手</h3>
                <p className="text-red-100 text-xs">7×24小时在线</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                }`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user'
                    ? 'bg-red-600 text-white rounded-br-none'
                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                }`}
                >
                  <pre className="whitespace-pre-wrap font-sans">{msg.content}</pre>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-orange-600" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0.1s]"></span>
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="问我关于非遗的问题..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
