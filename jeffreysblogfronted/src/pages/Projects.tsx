/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 21:04:39
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-12-10 10:02:57
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\pages\Projects.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */


import React, { useEffect, useState } from "react"
import Pagination from "../components/Pagination"
import ProjectCard from "../components/ProjectCard"
import { getRangeProjects } from "../common/Http/projectData"

function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const [projectLength,setProjectLength] = useState(0);
    const [projectsPerPage] = useState(5);

    const [postList,setPostList] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                await getRangeProjects(currentPage,projectsPerPage).then(res=>{
                    setPostList(res.data.data.posts);
                    setProjectLength(res.data.data.count);
                })
            }catch(err){

            }
        };
        fetchPosts();
    }, [currentPage,projectsPerPage]);

    // Change page
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);

    return (
        <div className="p-2 md:pt-16 md:px-16 bg-slate-700 h-full min-h-screen flex flex-col">
            <div className="mb-2 md:mb-16">
                <h1 className="font-bold text-xl md:text-4xl text-white mt-2 mb-8">Blogs</h1>
                <p className="text-base md:text-lg text-white overflow-ellipsis">Articles, tutorials, snippets, rants, and everything else. Subscribe for updates as they happen.</p>
            </div>
            <div>
                {
                    postList.map((projectItem,index) => {
                        return <ProjectCard key={index} project={projectItem}></ProjectCard>
                    })
                }
            </div>
            <div className="mt-auto flex flex-row items-center justify-center">
                <Pagination
                    PerPage={projectsPerPage}
                    total={projectLength}
                    paginateBack={paginateBack}
                    paginateFront={paginateFront}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default Projects