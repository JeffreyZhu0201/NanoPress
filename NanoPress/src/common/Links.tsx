/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-28 14:26:40
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-09 19:35:03
 * @FilePath: \NanoPress\NanoPress\src\common\Links.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import { Navigate } from 'react-router-dom';
import React from 'react';
import Login from '../pages/admin/Login';
import AdminHome from '../pages/admin/Home';

const Post = React.lazy(() => import('../pages/Posts'))
const Homepage = React.lazy(() => import('../pages/Homepage'))
const ArticleDetail = React.lazy(() => import('../pages/ArticleDetail'))

const links = [
    {
        name: '',
        path: '/',
        page: <Navigate to='/home' replace></Navigate>,
        type: 'fronted'
    },
    {
        name: "主页",
        path: '/home',
        page: <Homepage />,
        type: 'fronted'
    },
    {
        name: "文章",
        path: '/posts',
        page: <Post />,
        type: 'fronted'
    },
    {
        name: "详情页",
        path: '/articledetail/:type/:id',
        page: <ArticleDetail />
    }
]

const adminLinks = [
    {
        name: "后台登录",
        path: '/admin/login',
        page: <Login />,
        type: 'backend'
    },
    {
        name: "NanoPress管理后台",
        path: '/admin',
        page: <Navigate to='/admin/home' replace></Navigate>,
        type: 'backend'
    },
    {
        name: "NanoPress管理后台",
        path: '/admin/home',
        page: <AdminHome></AdminHome>,
        type: 'backend'
    }
]

export { links, adminLinks }
