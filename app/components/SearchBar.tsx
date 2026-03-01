'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    // 跳转到搜索结果页面
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜索非遗项目、门类、地区..."
          className="w-full px-6 py-4 pr-14 text-lg rounded-2xl border-2 border-gray-200 
                     focus:border-red-500 focus:outline-none transition-colors
                     placeholder:text-gray-400"
        />
        <button
          type="submit"
          disabled={isSearching}
          className="absolute right-3 top-1/2 -translate-y-1/2 
                     p-2 bg-red-600 text-white rounded-xl
                     hover:bg-red-700 transition-colors disabled:opacity-50"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
      
      <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
        <span className="text-gray-500">热门搜索：</span>
        {['剪纸', '年画', '刺绣', '泥塑', '昆曲', '古琴'].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => {
              setQuery(tag);
              window.location.href = `/search?q=${encodeURIComponent(tag)}`;
            }}
            className="px-3 py-1 bg-gray-100 hover:bg-red-100 text-gray-700 
                       hover:text-red-700 rounded-full transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </form>
  );
}
