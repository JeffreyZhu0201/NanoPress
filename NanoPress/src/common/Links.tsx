/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-28 14:26:40
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-03 15:51:10
 * @FilePath: \NanoPress\NanoPress\src\common\Links.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import { Navigate } from 'react-router-dom';
import React from 'react';

const Post = React.lazy(() => import('../pages/Posts'))
const Homepage = React.lazy(() => import('../pages/Homepage'))
const ArticleDetail = React.lazy(() => import('../pages/ArticleDetail'))

const links = [
    {
        name: '',
        path: '/',
        page: <Navigate to='/home' replace></Navigate>,
        number: 1
    },
    {
        name: "主页",
        path: '/home',
        page: <Homepage />,
        number: 1
    },
    {
        name: "文章",
        path: '/posts',
        page: <Post />,
        number: 1
    },
    // {
    //     name: "Projects",
    //     path: '/projects',
    //     page: <Projects />,
    //     number: 1
    // },
    {
        name: "详情页",
        path: '/articledetail/:type/:id',
        page: <ArticleDetail />
    }
]

export default links
