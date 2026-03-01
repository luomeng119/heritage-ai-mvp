'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search } from 'lucide-react';

// 所有示例项目数据
const allProjects = [
  { id: 1, code: 'VII-1', name: '杨柳青木版年画', category_name: '传统美术', batch: '2006(第一批)', region: '天津市', description: '杨柳青木版年画产生于明代崇祯年间，继承了宋、元绘画的传统。' },
  { id: 2, code: 'VII-2', name: '武强木版年画', category_name: '传统美术', batch: '2006(第一批)', region: '河北省武强县', description: '武强木版年画是河北省武强县传统民间工艺品，是中国民间特有的一种绘画体裁。' },
  { id: 3, code: 'VII-3', name: '桃花坞木版年画', category_name: '传统美术', batch: '2006(第一批)', region: '江苏省苏州市', description: '桃花坞木版年画是江南地区的民间木版年画，是中国五大民间木版年画之一。' },
  { id: 4, code: 'VII-4', name: '漳州木版年画', category_name: '传统美术', batch: '2006(第一批)', region: '福建省漳州市', description: '漳州木版年画始于宋代，盛于明清，以其独特的风格而闻名。' },
  { id: 5, code: 'VII-5', name: '杨家埠木版年画', category_name: '传统美术', batch: '2006(第一批)', region: '山东省潍坊市', description: '杨家埠木版年画与天津杨柳青、苏州桃花坞并称中国三大木版年画。' },
  { id: 6, code: 'VII-21', name: '苏绣', category_name: '传统美术', batch: '2006(第一批)', region: '江苏省苏州市', description: '苏绣是苏州地区刺绣产品的总称，是四大名绣之一。' },
  { id: 7, code: 'VII-22', name: '湘绣', category_name: '传统美术', batch: '2006(第一批)', region: '湖南省长沙市', description: '湘绣是中国四大名绣之一，带有鲜明湘楚文化特色。' },
  { id: 8, code: 'VII-23', name: '蜀绣', category_name: '传统美术', batch: '2006(第一批)', region: '四川省成都市', description: '蜀绣又名"川绣"，与苏绣、湘绣、粤绣齐名，为中国四大名绣之一。' },
  { id: 9, code: 'VII-24', name: '粤绣', category_name: '传统美术', batch: '2006(第一批)', region: '广东省广州市', description: '粤绣是广州刺绣和潮州刺绣的总称，是中国四大名绣之一。' },
  { id: 10, code: 'VII-31', name: '泥塑（天津泥人张）', category_name: '传统美术', batch: '2006(第一批)', region: '天津市', description: '天津泥人张彩塑是著名的汉族传统手工艺品，创始于清代道光年间。' },
];

export default function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<typeof allProjects>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setSearched(true);
    
    const filtered = allProjects.filter(p => 
      p.name.includes(searchQuery) ||
      p.description?.includes(searchQuery) ||
      p.region?.includes(searchQuery) ||
      p.category_name?.includes(searchQuery)
    );
    
    setResults(filtered);
    setLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query);
    window.history.pushState(null, '', `/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <nav className="mb-8">
          <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">← 返回首页</Link>
        </nav>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">搜索非遗项目</h1>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="输入项目名称、地区、门类等关键词..."
                className="w-full px-6 py-4 pr-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin text-4xl">⏳</div>
            <p className="mt-4 text-gray-600">正在搜索...</p>
          </div>
        ) : searched ? (
          <>
            <div className="mb-6 text-gray-600">找到 {results.length} 个相关项目</div>
            
            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((project) => (
                  <div 
                    key={project.id}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.code && (
                            <span className="text-sm px-2 py-1 bg-red-100 text-red-800 rounded-full">{project.code}</span>
                          )}
                          <span className="text-sm px-2 py-1 bg-orange-100 text-orange-800 rounded-full">{project.category_name}</span>
                          {project.batch && (
                            <span className="text-sm px-2 py-1 bg-gray-100 text-gray-700 rounded-full">{project.batch}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {project.region && (
                      <div className="text-sm text-gray-600 mb-2"><span className="font-medium">地区：</span>{project.region}</div>
                    )}
                    
                    {project.description && (
                      <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-600 mb-4">未找到与 "{query}" 相关的项目</p>
                <p className="text-sm text-gray-500">试试搜索：剪纸、年画、刺绣、泥塑</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600">输入关键词开始搜索非遗项目</p>
          </div>
        )}
      </div>
    </div>
  );
}
