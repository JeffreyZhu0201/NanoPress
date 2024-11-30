/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 20:51:21
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-28 15:27:23
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\pages\Homepage.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import React, { ReactElement } from "react"
import Avatar from "../resource/avatar.jpeg"

import ProjectCard from "../components/ProjectCard"
import ArticleCard from "../components/BlogCard"
import { Link } from "react-router-dom"

function Homepage(): ReactElement {

    return (
        <div className="Homepage bg-slate-400 w-full flex flex-col p-2 md:p-14">
            {/* hero板块 */}
            <div className="introduction my-12 md:mb-20">
                {/* 介绍板块 */}
                <img src={Avatar} alt="" className="border-2 md:border-4 h-14 md:h-20 border-emerald-100 md:border-emerald-300 my-6 rounded-full" />
                <p className="text-3xl font-extrabold md:text-4xl my-6">Hi,I am Jeffrey Zhu</p>
                <p className="text-xl font-sans my-6 ">A software engineer and open-source advocate enjoying the sunny life in Barcelona, Spain.</p>

                <div className="flex h-12 md:w-36 w-full text-2xl font-bold text-gray-200 duration-500
                rounded-s-sm items-center justify-center bg-green-500 hover:bg-green-800 ease-in-out transition-colors cursor-pointer
                ">
                    <div>Say Hello!</div>
                </div>

            </div>

            {/* 详细介绍板块 */}
            <div className="p-2">
                <p className="text-2xl font-bold">My Story</p>
                <p className="text-base font-light md:text-lg my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie. Et leo duis ut diam. Sit amet tellus cras adipiscing enim eu turpis. Adipiscing at in tellus integer feugiat.</p>
                <p className="text-base font-light md:text-lg">Maecenas accumsan lacus vel facilisis. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Non tellus orci ac auctor augue mauris augue neque gravida. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Amet mauris commodo quis imperdiet massa. Integer vitae justo eget magna fermentum iaculis eu non.</p>
            </div>

            {/* 博客板块 */}
            <div className="p-2  grid grid-flow-row gap-4">
                <div className="flex items-center">
                    <p className="text-2xl font-bold text-white">最新发布</p>
                    <Link to="/blogs" className="ml-8 text-gray-200 mb-auto font-light cursor-pointer hover:text-white transition-colors">更多文章--&gt;</Link>
                </div>

                <ArticleCard category={[{name:"123",color:"red"}]} title={"123"} date={"123"} read={"123"} blogId={"123"}></ArticleCard>
                <ArticleCard category={[{name:"123",color:"blue"}]} title={"123"} date={"123"} read={"123"} blogId={"123"}></ArticleCard>
                <ArticleCard category={[{name:"123",color:"yellow"}]} title={"123"} date={"123"} read={"123"} blogId={"123"}></ArticleCard>
            </div>

            <div className="p-2  grid grid-flow-row gap-4">
                <div className="flex items-center">
                    <p className="text-2xl font-bold text-white">最新项目</p>
                    <Link to="/projects" className="ml-8 text-gray-200 mb-auto font-light cursor-pointer hover:text-white transition-colors">更多项目--&gt;</Link>
                </div>
                <ProjectCard title={"title1"} date={"123-123-123"} intro={"123"}></ProjectCard>
            </div>
        </div>
    )

}

export default Homepage