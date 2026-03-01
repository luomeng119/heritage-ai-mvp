import { notFound } from 'next/navigation';
import Link from 'next/link';
import { categories, getProjectsByCategory } from '@/lib/heritage-data';

export function generateStaticParams() {
  return categories.map(cat => ({ id: cat.id.toString() }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { id } = await params;
  const categoryId = parseInt(id);
  
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) {
    notFound();
  }
  
  const projects = getProjectsByCategory(categoryId);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="mb-8">
          <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">
            ← 返回首页
          </Link>
        </nav>
        
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{category.icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600">{category.description}</p>
          <div className="mt-4 inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm">
            门类编号：{category.code} | 共 {projects.length} 个项目
          </div>
        </div>
        
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl font-bold text-red-600">{project.code}</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{project.batch}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">地区：</span>{project.region}</p>
                  <p><span className="font-medium">保护单位：</span>{project.protect_unit}</p>
                </div>
                
                <p className="mt-4 text-gray-600 text-sm line-clamp-3">{project.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-gray-600">该门类数据正在整理中，敬请期待...</p>
          </div>
        )}
      </div>
    </div>
  );
}
