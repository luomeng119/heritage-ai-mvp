import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'heritage.db');

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
  }
  return db;
}

export function initDatabase() {
  const db = getDb();
  
  // 创建非遗分类表
  db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      name_en TEXT,
      description TEXT,
      icon TEXT,
      sort_order INTEGER DEFAULT 0
    );
    
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      project_no TEXT,
      code TEXT,
      name TEXT NOT NULL,
      category_id INTEGER,
      batch TEXT,
      project_type TEXT,
      region TEXT,
      protect_unit TEXT,
      description TEXT,
      history TEXT,
      inheritance TEXT,
      features TEXT,
      images TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (category_id) REFERENCES categories(id)
    );
    
    CREATE TABLE IF NOT EXISTS chat_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT NOT NULL,
      role TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE IF NOT EXISTS user_favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT NOT NULL,
      project_id INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (project_id) REFERENCES projects(id)
    );
  `);
  
  // 初始化十大门类数据
  const categories = [
    { code: 'I', name: '民间文学', name_en: 'Folk Literature', icon: '📖', sort_order: 1 },
    { code: 'II', name: '传统音乐', name_en: 'Traditional Music', icon: '🎵', sort_order: 2 },
    { code: 'III', name: '传统舞蹈', name_en: 'Traditional Dance', icon: '💃', sort_order: 3 },
    { code: 'IV', name: '传统戏剧', name_en: 'Traditional Opera', icon: '🎭', sort_order: 4 },
    { code: 'V', name: '曲艺', name_en: 'Quyi', icon: '🎤', sort_order: 5 },
    { code: 'VI', name: '传统体育、游艺与杂技', name_en: 'Traditional Sports', icon: '⚽', sort_order: 6 },
    { code: 'VII', name: '传统美术', name_en: 'Traditional Fine Arts', icon: '🎨', sort_order: 7, description: '剪纸、年画、刺绣、泥塑、雕刻等传统造型艺术' },
    { code: 'VIII', name: '传统技艺', name_en: 'Traditional Crafts', icon: '🔨', sort_order: 8, description: '传统手工艺、制作技艺' },
    { code: 'IX', name: '传统医药', name_en: 'Traditional Medicine', icon: '💊', sort_order: 9 },
    { code: 'X', name: '民俗', name_en: 'Folklore', icon: '🏮', sort_order: 10 }
  ];
  
  const insertCategory = db.prepare(`
    INSERT OR IGNORE INTO categories (code, name, name_en, icon, sort_order, description) 
    VALUES (@code, @name, @name_en, @icon, @sort_order, @description)
  `);
  
  for (const cat of categories) {
    insertCategory.run({
      ...cat,
      description: cat.description || null
    });
  }
  
  console.log('Database initialized successfully');
  return db;
}

export function closeDatabase() {
  if (db) {
    db.close();
    db = null;
  }
}
