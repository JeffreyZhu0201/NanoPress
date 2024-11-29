/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-28 14:26:40
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-29 11:42:58
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\common\Links.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import { Navigate } from 'react-router-dom';
import React from 'react';

const Blogs = React.lazy(()=>import('../pages/Blogs'))
const Homepage = React.lazy(()=>import('../pages/Homepage'))
const Projects = React.lazy(()=>import('../pages/Projects'))
const BlogDetail = React.lazy(()=>import('../pages/BlogDetail'))

const links = [
    {
        name:'',
        path:'/',
        page:<Navigate to='/home' replace></Navigate>
    },
    {
        name:"Home",
        path:'/home',
        page:<Homepage/>
    },
    {
        name:"Blogs",
        path:'/blogs',
        page:<Blogs/>
    },
    {
        name:"Projects",
        path:'/projects',
        page:<Projects/>
    },
    {
        name:"BlogDetail",
        path:'/blogdetail/:id',
        page:<BlogDetail/>
    }
]

export default links
