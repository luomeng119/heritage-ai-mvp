'use client';

import { useState } from 'react';
import { ChatAgent } from './components/ChatAgent';
import { CategoryCard } from './components/CategoryCard';
import { StatsCard } from './components/StatsCard';
import { SearchBar } from './components/SearchBar';

interface Category {
  id: number;
  code: string;
  name: string;
  name_en: string;
  description: string | null;
  icon: string;
  sort_order: number;
}

// 十大门类数据（构建时嵌入）
const categoriesData: Category[] = [
  { id: 1, code: 'I', name: '民间文学', name_en: 'Folk Literature', icon: '📖', sort_order: 1, description: '神话、传说、史诗、歌谣等口头传统' },
  { id: 2, code: 'II', name: '传统音乐', name_en: 'Traditional Music', icon: '🎵', sort_order: 2, description: '民歌、器乐、传统舞蹈音乐等' },
  { id: 3, code: 'III', name: '传统舞蹈', name_en: 'Traditional Dance', icon: '💃', sort_order: 3, description: '民族民间舞蹈、祭祀舞蹈等' },
  { id: 4, code: 'IV', name: '传统戏剧', name_en: 'Traditional Opera', icon: '🎭', sort_order: 4, description: '京剧、昆曲、越剧、黄梅戏等' },
  { id: 5, code: 'V', name: '曲艺', name_en: 'Quyi', icon: '🎤', sort_order: 5, description: '相声、评书、快板、大鼓等说唱艺术' },
  { id: 6, code: 'VI', name: '传统体育、游艺与杂技', name_en: 'Traditional Sports', icon: '⚽', sort_order: 6, description: '传统武术、竞技、游戏、杂技等' },
  { id: 7, code: 'VII', name: '传统美术', name_en: 'Traditional Fine Arts', icon: '🎨', sort_order: 7, description: '剪纸、年画、刺绣、泥塑、雕刻等' },
  { id: 8, code: 'VIII', name: '传统技艺', name_en: 'Traditional Crafts', icon: '🔨', sort_order: 8, description: '传统手工艺、制作技艺' },
  { id: 9, code: 'IX', name: '传统医药', name_en: 'Traditional Medicine', icon: '💊', sort_order: 9, description: '中医药、民族医药等传统医学' },
  { id: 10, code: 'X', name: '民俗', name_en: 'Folklore', icon: '🏮', sort_order: 10, description: '传统节日、礼仪、民间信仰等' },
];

export default function Home() {
  const [categories] = useState<Category[]>(categoriesData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              🏛️ 国家级非物质文化遗产
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              AI赋能非遗知识平台
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
            探索非遗文化，传承千年文明
          </p>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            基于 DeepSeek AI 的智能非遗知识平台，涵盖十大门类、1557个国家级项目、3610个子项
            <br />
            与您一起深入了解中华传统文化的博大精深
          </p>

          <SearchBar />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCard icon="📚" label="十大门类" value={10} />
            <StatsCard icon="🎯" label="国家级项目" value={1557} />
            <StatsCard icon="📋" label="子项数量" value={3610} />
            <StatsCard icon="🤖" label="AI助手" value="24h" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              非遗十大门类
            </h2>
            <p className="text-gray-600">
              国家级非物质文化遗产代表性项目名录分类体系
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              平台特色
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI 智能问答</h3>
              <p className="text-gray-600">
                基于 DeepSeek 大模型，7×24小时在线解答非遗相关问题，
                支持多轮对话，深度交流。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">权威知识库</h3>
              <p className="text-gray-600">
                涵盖国务院公布的五批国家级非遗名录，
                1557个项目、3610个子项详细资料。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">十大门类全覆盖</h3>
              <p className="text-gray-600">
                从民间文学到民俗，从传统音乐到传统技艺，
                系统了解中华非遗文化全貌。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Agent - 右下角悬浮AI助手 */}
      <ChatAgent />
    </div>
  );
}
