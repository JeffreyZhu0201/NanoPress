/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-26 15:46:51
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-30 20:42:23
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\components\ProjectCard.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import { Link } from "react-router-dom"
import Project from "../common/entity/Project"

function ProjectCard(props: { project: Project }) {

    return (
        <Link to={`/articledetail/project/${props.project.projectId}`}>
            <div className="bg-transparent border-yellow-200 rounded border hover:border-white transition-colors duration-300 shadow-purple-500 hover:shadow-2xl">
                <div className="m-3 flex flex-col  cursor-pointer">
                    <h1 className="text-xl md:text-2xl font-bold text-white truncate md:mb-2">{props.project.title}</h1>
                    <div className="line-clamp-1 text-sm font-thin text-white">{props.project.intro}</div>
                    <div className="grid grid-cols-2 mt-1">
                        <div className="text-gray-300 text-sm">{props.project.date}</div>
                        <div className="text-right text-gray-300 text-sm cursor-pointer hover:text-slate-100 transition-colors">了解详情</div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default ProjectCard
