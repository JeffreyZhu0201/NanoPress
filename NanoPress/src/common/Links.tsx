/* eslint-disable react/jsx-no-undef */
/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-28 14:26:40
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-09 20:09:18
 * @FilePath: \NanoPress\NanoPress\src\common\Links.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import { Navigate } from 'react-router-dom';
import React from 'react';
import Icon, { EditFilled, HomeOutlined, TagFilled } from '@ant-design/icons';
import Login from '../pages/admin/Login';
import AdminHome from '../pages/admin/Home';
import PostManage from '../pages/admin/PostManage';
import TagManager from '../pages/admin/TagManager';

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
        page: <Login />
    },
    {
        name: "仪表板",
        path: '/admin',
        page: <Navigate to='/admin/home' replace></Navigate>
    },
    {
        name: "仪表板",
        path: '/admin/home',
        icon:<HomeOutlined/>,
        page: <AdminHome></AdminHome>,
        type: 'backend'
    },
    {
        name: "文章管理",
        path: '/admin/post',
        page: <PostManage></PostManage>,
        icon:<EditFilled />,
        type: 'backend'
    },
    {
        name: "分类管理管理",
        path: '/admin/tag',
        page: <TagManager></TagManager>,
        icon:<TagFilled />,
        type: 'backend'
    },
]

export { links, adminLinks }
