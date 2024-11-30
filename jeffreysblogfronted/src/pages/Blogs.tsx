/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 21:03:31
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-28 19:01:26
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\pages\Blogs.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import React from "react"
import ArticleCard from "../components/BlogCard"

function Blogs() {
    
    return (
        <div className="p-2 md:p-16 bg-slate-700">
            <div className="mb-2 md:mb-16">
                <h1 className="font-bold text-xl md:text-4xl text-white mt-2 mb-8">Blogs</h1>
                <p className="text-base md:text-lg text-white overflow-ellipsis">Articles, tutorials, snippets, rants, and everything else. Subscribe for updates as they happen.</p>
            </div>
            <div>
                <ArticleCard title={"123"} read={"123"} date={"123"} category={[{name:"123",color:"red"}]} blogId={"123"}></ArticleCard>
            </div>
        </div>
    )
}

export default Blogs