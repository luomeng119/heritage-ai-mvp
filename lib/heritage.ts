import { getDb } from './db';

export interface Category {
  id: number;
  code: string;
  name: string;
  name_en: string;
  description: string | null;
  icon: string;
  sort_order: number;
}

export interface Project {
  id: number;
  project_no: string | null;
  code: string | null;
  name: string;
  category_id: number;
  batch: string | null;
  project_type: string | null;
  region: string | null;
  protect_unit: string | null;
  description: string | null;
  history: string | null;
  inheritance: string | null;
  features: string | null;
  images: string | null;
  category_name?: string;
}

export function getAllCategories(): Category[] {
  const db = getDb();
  return db.prepare('SELECT * FROM categories ORDER BY sort_order').all() as Category[];
}

export function getCategoryByCode(code: string): Category | undefined {
  const db = getDb();
  return db.prepare('SELECT * FROM categories WHERE code = ?').get(code) as Category | undefined;
}

export function getProjectsByCategory(categoryId: number, limit = 50): Project[] {
  const db = getDb();
  return db.prepare(`
    SELECT p.*, c.name as category_name 
    FROM projects p 
    LEFT JOIN categories c ON p.category_id = c.id 
    WHERE p.category_id = ? 
    ORDER BY p.batch, p.project_no 
    LIMIT ?
  `).all(categoryId, limit) as Project[];
}

export function searchProjects(keyword: string, limit = 20): Project[] {
  const db = getDb();
  return db.prepare(`
    SELECT p.*, c.name as category_name 
    FROM projects p 
    LEFT JOIN categories c ON p.category_id = c.id 
    WHERE p.name LIKE ? OR p.description LIKE ? OR p.region LIKE ?
    ORDER BY p.name 
    LIMIT ?
  `).all(`%${keyword}%`, `%${keyword}%`, `%${keyword}%`, limit) as Project[];
}

export function getProjectById(id: number): Project | undefined {
  const db = getDb();
  return db.prepare(`
    SELECT p.*, c.name as category_name 
    FROM projects p 
    LEFT JOIN categories c ON p.category_id = c.id 
    WHERE p.id = ?
  `).get(id) as Project | undefined;
}

export function getProjectsCount(): number {
  const db = getDb();
  const result = db.prepare('SELECT COUNT(*) as count FROM projects').get() as { count: number };
  return result.count;
}

export function insertProject(project: Partial<Project>): void {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO projects (project_no, code, name, category_id, batch, project_type, region, protect_unit, description)
    VALUES (@project_no, @code, @name, @category_id, @batch, @project_type, @region, @protect_unit, @description)
  `);
  stmt.run(project);
}

// 初始化示例数据（传统美术类）
export function initSampleProjects() {
  const db = getDb();
  const count = getProjectsCount();
  if (count > 0) return;
  
  const category7 = db.prepare('SELECT id FROM categories WHERE code = ?').get('VII') as { id: number };
  if (!category7) return;
  
  const sampleProjects = [
    {
      project_no: '300',
      code: 'VII-1',
      name: '杨柳青木版年画',
      category_id: category7.id,
      batch: '2006 (第一批)',
      project_type: '新增项目',
      region: '天津市',
      protect_unit: '天津杨柳青画社',
      description: '杨柳青木版年画产生于明代崇祯年间，继承了宋、元绘画的传统，吸收了明代木刻版画、工艺美术、戏剧舞台的形式，采用木版套印和手工彩绘相结合的方法，创立了鲜明活泼、喜气吉祥、富有感人题材的独特风格。'
    },
    {
      project_no: '301',
      code: 'VII-2',
      name: '武强木版年画',
      category_id: category7.id,
      batch: '2006 (第一批)',
      project_type: '新增项目',
      region: '河北省武强县',
      protect_unit: '武强年画博物馆',
      description: '武强木版年画是河北省武强县传统民间工艺品之一，因其产地在河北武强县而得名。是中国民间特有的一种绘画体裁，具有浓郁的乡土气息和地方特色。'
    },
    {
      project_no: '302',
      code: 'VII-3',
      name: '桃花坞木版年画',
      category_id: category7.id,
      batch: '2006 (第一批)',
      project_type: '新增项目',
      region: '江苏省苏州市',
      protect_unit: '苏州市公共文化中心',
      description: '桃花坞木版年画是江南地区的民间木版年画，因曾集中在苏州城内桃花坞一带生产而得名。它和河南朱仙镇、天津杨柳青、山东潍坊杨家埠、四川绵竹的木版年画，并称为中国五大民间木版年画。'
    },
    {
      project_no: '307',
      code: 'VII-8',
      name: '剪纸（蔚县剪纸）',
      category_id: category7.id,
      batch: '2006 (第一批)',
      project_type: '新增项目',
      region: '河北省蔚县',
      protect_unit: '蔚县文化馆',
      description: '蔚县剪纸源于明代，是一种以阴刻为主、阳刻为辅的点彩剪纸。它是中国民间剪纸艺术的重要组成部分，具有独特的艺术风格和浓郁的地方特色。'
    },
    {
      project_no: '320',
      code: 'VII-21',
      name: '苏绣',
      category_id: category7.id,
      batch: '2006 (第一批)',
      project_type: '新增项目',
      region: '江苏省苏州市',
      protect_unit: '苏州刺绣研究所',
      description: '苏绣是苏州地区刺绣产品的总称，为江苏省苏州市民间传统美术。苏绣起源于苏州，是四大名绣之一，国家级非物质文化遗产之一。'
    },
    {
      project_no: '321',
      code: 'VII-22',
      name: '湘绣',
      category_id: category7.id,
      batch: '2006 (第一批)',
      project_type: '新增项目',
      region: '湖南省长沙市',
      protect_unit: '湖南省湘绣研究所',
      description: '湘绣是中国四大名绣之一，是以湖南长沙为中心的带有鲜明湘楚文化特色的湖南刺绣产品的总称，它起源于湖南的民间刺绣，吸取了苏绣和粤绣的优点而发展起来。'
    },
    {
      project_no: '322',
      code: 'VII-23',
      name: '蜀绣',
      category_id: category7.id,
      batch: '2006 (第一批)',
      project_type: '新增项目',
      region: '四川省成都市',
      protect_unit: '成都市蜀绣工艺美术博物馆',
      description: '蜀绣，四川省成都市特产，中国国家地理标志产品。蜀绣又名"川绣"，与苏绣、湘绣、粤绣齐名，为中国四大名绣之一，是在丝绸或其他织物上采用蚕丝线绣出花纹图案的中国传统工艺。'
    },
    {
      project_no: '323',
      code: 'VII-24',
      name: '粤绣',
      category_id: category7.id,
      batch: '2006 (第一批)',
      project_type: '新增项目',
      region: '广东省广州市',
      protect_unit: '广州市非物质遗产保护中心',
      description: '粤绣是广州刺绣（广绣）和潮州刺绣（潮绣）的总称，是中国四大名绣之一。粤绣技艺注重结合材料形质，有真丝绒绣、金银线绣、线绣和珠绣四类。'
    },
    {
      project_no: '330',
      code: 'VII-31',
      name: '泥塑（天津泥人张）',
      category_id: category7.id,
      batch: '2006 (第一批)',
      project_type: '新增项目',
      region: '天津市',
      protect_unit: '天津泥人张彩塑工作室',
      description: '天津泥人张彩塑为天津市的一种民间文化，著名的汉族传统手工艺品之一。作为北方流传的一派民间彩塑，创始于清代道光年间，是天津艺人张明山于19世纪中叶创造的彩绘泥塑艺术品，现为天津市首批国家级非物质文化遗产。'
    }
  ];
  
  for (const proj of sampleProjects) {
    insertProject(proj);
  }
  
  console.log('Sample projects initialized');
}
