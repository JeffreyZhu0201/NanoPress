/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-10-30 20:50:44
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-18 13:07:06
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\app\layout.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
