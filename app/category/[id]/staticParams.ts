import { initDatabase } from '@/lib/db';
import { getAllCategories } from '@/lib/heritage';

// 为所有分类生成静态页面
export function generateStaticParams() {
  // 返回所有可能的分类ID
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
  ];
}
