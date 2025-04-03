/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-04-03 16:19:03
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-03 16:19:12
 * @FilePath: \NanoPress\NanoPress\src\setupProxy.js
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
// filepath: src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080', // 后端服务器地址
      changeOrigin: true,
    })
  );
};