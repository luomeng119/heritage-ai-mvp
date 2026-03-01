import { notFound } from 'next/navigation';
import Link from 'next/link';

// 十大门类数据
const categoriesData = [
  { id: 1, code: 'I', name: '民间文学', icon: '📖', description: '神话、传说、故事、歌谣等口头传统' },
  { id: 2, code: 'II', name: '传统音乐', icon: '🎵', description: '民歌、器乐、舞蹈音乐、戏曲音乐等' },
  { id: 3, code: 'III', name: '传统舞蹈', icon: '💃', description: '民族民间舞蹈、祭祀舞蹈、节庆舞蹈等' },
  { id: 4, code: 'IV', name: '传统戏剧', icon: '🎭', description: '京剧、昆曲、越剧、黄梅戏等各类戏曲' },
  { id: 5, code: 'V', name: '曲艺', icon: '🎤', description: '评书、相声、快板、大鼓等说唱艺术' },
  { id: 6, code: 'VI', name: '传统体育、游艺与杂技', icon: '⚽', description: '武术、杂技、传统游艺、民族体育等' },
  { id: 7, code: 'VII', name: '传统美术', icon: '🎨', description: '剪纸、年画、刺绣、泥塑、雕刻等传统造型艺术' },
  { id: 8, code: 'VIII', name: '传统技艺', icon: '🔨', description: '传统手工艺、制作技艺' },
  { id: 9, code: 'IX', name: '传统医药', icon: '💊', description: '中医生命与疾病认知、中药炮制、针灸等' },
  { id: 10, code: 'X', name: '民俗', icon: '🏮', description: '传统节日、生产商贸习俗、生活习俗等' },
];

// 示例项目数据
const projectsData: Record<number, any[]> = {
  7: [
    { id: 1, code: 'VII-1', name: '杨柳青木版年画', batch: '2006(第一批)', region: '天津市', protect_unit: '天津杨柳青画社', description: '杨柳青木版年画产生于明代崇祯年间，继承了宋、元绘画的传统，吸收了明代木刻版画、工艺美术、戏剧舞台的形式，采用木版套印和手工彩绘相结合的方法。' },
    { id: 2, code: 'VII-2', name: '武强木版年画', batch: '2006(第一批)', region: '河北省武强县', protect_unit: '武强年画博物馆', description: '武强木版年画是河北省武强县传统民间工艺品，是中国民间特有的一种绘画体裁，具有浓郁的乡土气息和地方特色。' },
    { id: 3, code: 'VII-3', name: '桃花坞木版年画', batch: '2006(第一批)', region: '江苏省苏州市', protect_unit: '苏州市公共文化中心', description: '桃花坞木版年画是江南地区的民间木版年画，因曾集中在苏州城内桃花坞一带生产而得名，是中国五大民间木版年画之一。' },
    { id: 4, code: 'VII-4', name: '漳州木版年画', batch: '2006(第一批)', region: '福建省漳州市', protect_unit: '漳州市艺术馆', description: '漳州木版年画始于宋代，盛于明清，以其独特的风格和浓郁的地方特色而闻名。' },
    { id: 5, code: 'VII-5', name: '杨家埠木版年画', batch: '2006(第一批)', region: '山东省潍坊市', protect_unit: '潍坊市寒亭区文化馆', description: '杨家埠木版年画是流传于山东省潍坊市杨家埠的一种民间版画，与天津杨柳青、苏州桃花坞并称中国三大木版年画。' },
    { id: 6, code: 'VII-21', name: '苏绣', batch: '2006(第一批)', region: '江苏省苏州市', protect_unit: '苏州刺绣研究所', description: '苏绣是苏州地区刺绣产品的总称，为江苏省苏州市民间传统美术，起源于苏州，是四大名绣之一。' },
    { id: 7, code: 'VII-22', name: '湘绣', batch: '2006(第一批)', region: '湖南省长沙市', protect_unit: '湖南省湘绣研究所', description: '湘绣是中国四大名绣之一，是以湖南长沙为中心的带有鲜明湘楚文化特色的湖南刺绣产品的总称。' },
    { id: 8, code: 'VII-23', name: '蜀绣', batch: '2006(第一批)', region: '四川省成都市', protect_unit: '成都市蜀绣工艺美术博物馆', description: '蜀绣又名"川绣"，与苏绣、湘绣、粤绣齐名，为中国四大名绣之一，是在丝绸或其他织物上采用蚕丝线绣出花纹图案的中国传统工艺。' },
    { id: 9, code: 'VII-24', name: '粤绣', batch: '2006(第一批)', region: '广东省广州市', protect_unit: '广州市非物质遗产保护中心', description: '粤绣是广州刺绣和潮州刺绣的总称，是中国四大名绣之一，技艺注重结合材料形质。' },
    { id: 10, code: 'VII-31', name: '泥塑（天津泥人张）', batch: '2006(第一批)', region: '天津市', protect_unit: '天津泥人张彩塑工作室', description: '天津泥人张彩塑是天津市的一种民间文化，著名的汉族传统手工艺品之一，创始于清代道光年间。' },
  ]
};

export function generateStaticParams() {
  return categoriesData.map(cat => ({ id: cat.id.toString() }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { id } = await params;
  const categoryId = parseInt(id);
  
  const category = categoriesData.find(c => c.id === categoryId);
  
  if (!category) {
    notFound();
  }
  
  const projects = projectsData[categoryId] || [];
  
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
