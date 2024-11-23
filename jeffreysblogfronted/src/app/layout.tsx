/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-10-30 20:50:44
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-18 15:57:39
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\app\layout.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import NavigateBar from "./componets/NavigateBar";
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
        <NavigateBar></NavigateBar>
        <div>{children}</div>
      </body>
    </html>
  );
}
