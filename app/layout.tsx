import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "档案AI共学社 - 非遗文化知识平台",
  description: "探索国家级非物质文化遗产，十大门类、1557个项目、3610个子项。AI智能问答，传承千年文明。",
  keywords: ["非遗", "非物质文化遗产", "传统文化", "AI助手", "档案AI共学社"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {/* Navigation */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 
                                rounded-xl flex items-center justify-center text-white font-bold">
                  档
                </div>
                <div>
                  <span className="font-bold text-gray-900">档案AI共学社</span>
                  <span className="hidden sm:inline text-xs text-gray-500 ml-2">非遗文化知识平台</span>
                </div>
              </Link>
              
              <div className="flex items-center gap-6">
                <Link 
                  href="/search" 
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  搜索
                </Link>
                <a 
                  href="https://github.com/luomeng119/heritage-ai-mvp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        {children}
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">档案AI共学社</h3>
                <p className="text-gray-400 text-sm">
                  探索非遗文化，传承千年文明。
                  <br />
                  互联网和AI时代的文化名片。
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">快速链接</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/" className="hover:text-white">首页</Link></li>
                  <li><Link href="/search" className="hover:text-white">搜索项目</Link></li>
                  <li><a href="https://www.ihchina.cn" target="_blank" className="hover:text-white">中国非遗网</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">数据来源</h4>
                <p className="text-sm text-gray-400">
                  国务院公布国家级非物质文化遗产名录
                  <br />
                  共五批 1557个项目 3610个子项
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
              <p>© 2024 档案AI共学社 - 非遗文化知识平台</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
