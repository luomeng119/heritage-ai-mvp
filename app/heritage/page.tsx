import Link from "next/link";
import { ArrowLeft, Sparkles, BookOpen, MapPin, User } from "lucide-react";

const HERITAGE_CATEGORIES = [
  {
    id: 'paper-cut',
    name: '剪纸艺术',
    icon: '✂️',
    description: '中国剪纸是用剪刀或刻刀在纸上剪刻花纹，用于装点生活或配合其他民俗活动的一种民间艺术。',
    origin: '全国各地',
    master: '库淑兰、高凤莲等',
    features: ['对称构图', '镂空技法', '红色为主', '寓意吉祥'],
    history: '早在汉、唐时代，民间妇女即有使用金银箔和彩帛剪成方胜花鸟贴在鬓角为饰的风尚。',
  },
  {
    id: 'embroidery',
    name: '刺绣工艺',
    icon: '🧵',
    description: '刺绣是针线在织物上绣制的各种装饰图案的总称，是中国民间传统手工艺之一。',
    origin: '苏州、湖南、广东、四川',
    master: '四大名绣传承人',
    features: ['针法丰富', '色彩细腻', '图案精美', '工艺复杂'],
    history: '中国刺绣源远流长，至少有三千多年历史。四大名绣各具特色，代表了中国刺绣的最高水平。',
  },
  {
    id: 'wood-print',
    name: '木版年画',
    icon: '🎨',
    description: '木版年画是中国历史悠久的传统民间艺术形式，有着一千多年的历史。',
    origin: '天津杨柳青、苏州桃花坞、山东潍坊',
    master: '各地年画世家',
    features: ['木版雕刻', '手工印刷', '色彩鲜艳', '年节装饰'],
    history: '年画的起源可以追溯到宋代，到了明清时期达到鼎盛，是中国年文化的重要组成部分。',
  },
  {
    id: 'batik',
    name: '蜡染技艺',
    icon: '🧣',
    description: '蜡染是中华民族古老的民间传统纺织印染手工艺，古称蜡缬。',
    origin: '贵州、云南、湘西等苗族地区',
    master: '苗族蜡染传承人',
    features: ['蓝白相间', '冰纹效果', '防染工艺', '民族特色'],
    history: '蜡染起源于秦汉，成熟于隋唐，在苗族等少数民族地区世代相传。',
  },
  {
    id: 'clay',
    name: '泥塑艺术',
    icon: '🏺',
    description: '泥塑，俗称"彩塑"，是中国民间传统的一种古老常见的民间艺术。',
    origin: '天津泥人张、陕西凤翔、无锡惠山',
    master: '泥人张世家',
    features: ['造型生动', '色彩鲜明', '乡土气息', '寓意吉祥'],
    history: '泥塑艺术起源于新石器时代，距今已有数千年的历史，在汉代已相当成熟。',
  },
];

export default function HeritagePage() {
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
              <BookOpen className="w-6 h-6 text-amber-600" />
              <span className="text-xl font-bold text-amber-900">非遗百科</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 标题区 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">非物质文化遗产百科</h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            探索中国传统文化的瑰宝，了解国家级非物质文化遗产项目的历史、技艺与传承
          </p>
        </div>

        {/* 非遗项目卡片 */}
        <div className="grid md:grid-cols-2 gap-6">
          {HERITAGE_CATEGORIES.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-amber-900 mb-2">{item.name}</h2>
                  <p className="text-amber-700 mb-4">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-amber-600">
                      <MapPin className="w-4 h-4" />
                      <span>{item.origin}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-amber-600">
                      <User className="w-4 h-4" />
                      <span>{item.master}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4">
                    <p className="text-sm text-amber-800">
                      <span className="font-semibold">历史渊源：</span>{item.history}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部提示 */}
        <div className="mt-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 text-white text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">想了解更多？</h3>
          <p className="text-amber-100 mb-6">与非遗智能助手对话，深入探索非遗文化</p>
          <p className="text-sm text-amber-200">点击右下角的悬浮按钮开始对话</p>
        </div>
      </div>
    </div>
  );
}
