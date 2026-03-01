'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { searchProjects, allProjects, Project } from '@/lib/heritage-data';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Project[]>([]);
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
    
    const filtered = searchProjects(searchQuery);
    
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
          
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
            <span className="text-gray-500">热门搜索：</span>
            {['剪纸', '年画', '刺绣', '昆曲', '古琴', '京剧', '太极拳', '春节'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setQuery(tag);
                  performSearch(tag);
                  window.history.pushState(null, '', `/search?q=${encodeURIComponent(tag)}`);
                }}
                className="px-3 py-1 bg-red-50 hover:bg-red-100 text-red-700 rounded-full transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin text-4xl">⏳</div>
            <p className="mt-4 text-gray-600">正在搜索...</p>
          </div>
        ) : searched ? (
          <>
            <div className="mb-6 text-gray-600">找到 {results.length} 个相关项目（共 {allProjects.length} 个项目）</div>
            
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
                <p className="text-sm text-gray-500">试试搜索：剪纸、年画、刺绣、昆曲、古琴</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600">输入关键词开始搜索非遗项目</p>
            <p className="text-sm text-gray-500 mt-2">知识库共收录 {allProjects.length} 个国家级非遗项目</p>
          </div>
        )}
      </div>
    </div>
  );
}
