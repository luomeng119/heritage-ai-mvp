import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "纹韵AI - AI赋能非遗文化传承",
  description: "使用AI技术生成传统非遗纹样，探索剪纸、刺绣、年画等非遗艺术",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
