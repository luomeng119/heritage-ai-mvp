'use client';

import { useState } from 'react';

interface Category {
  id: number;
  code: string;
  name: string;
  name_en: string;
  description: string | null;
  icon: string;
  sort_order: number;
}

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`/category/${category.id}`}
      className={`
        block p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer
        ${isHovered 
          ? 'border-red-400 bg-red-50 shadow-lg transform -translate-y-1' 
          : 'border-gray-100 bg-white hover:border-red-200'
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center">
        <div className="text-4xl mb-3">{category.icon}</div>
        <h3 className="font-semibold text-gray-900 mb-1">
          {category.name}
        </h3>
        <p className="text-xs text-gray-500">
          {category.code}
        </p>
        {category.description && isHovered && (
          <p className="mt-3 text-sm text-gray-600 line-clamp-2">
            {category.description}
          </p>
        )}
      </div>
    </a>
  );
}
