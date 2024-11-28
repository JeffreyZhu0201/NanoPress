/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 21:04:39
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-28 19:07:23
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\pages\Projects.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import React from "react"
import ProjectCard from "../components/ProjectCard"


function Projects() {
    
    return (
        <div className="p-2 md:p-16 bg-slate-700">
            <div className="mb-2 md:mb-16">
                <h1 className="font-bold text-xl md:text-4xl text-white mt-2 mb-8">Projects</h1>
                <p className="text-base md:text-lg text-white overflow-ellipsis">Articles, tutorials, snippets, rants, and everything else. Subscribe for updates as they happen.</p>
            </div>
            <div>
                <ProjectCard title={"I'm title"} intro={"Introduction"} date={"im'date"}></ProjectCard>      
            </div>
        </div>
    )
}

export default Projects