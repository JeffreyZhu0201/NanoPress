/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 21:03:31
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-30 20:52:29
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\pages\Blogs.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import React, { useEffect, useState } from "react"
import Pagination from "../components/Pagination"
import testBlogs from "../common/testData/blogData"
import Blog from "../common/entity/blogEntity"
import BlogCard from "../components/BlogCard"

function Blogs() {

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const [previousEnable,setPrevoisEnable] = useState(0);
    const [nextEnable,setNextEnable] = useState(1);

    const [blogsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            //const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            //setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * blogsPerPage;
    const indexOfFirstPost = indexOfLastPost - blogsPerPage;

    var blogList: Blog[] = testBlogs.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginateFront = () => {
            setCurrentPage(currentPage + 1);
    }
    const paginateBack = () => setCurrentPage(currentPage - 1);


    return (
        <div className="p-2 md:p-16 bg-slate-700 h-full flex flex-col">
            <div className="mb-2 md:mb-16">
                <h1 className="font-bold text-xl md:text-4xl text-white mt-2 mb-8">Blogs</h1>
                <p className="text-base md:text-lg text-white overflow-ellipsis">Articles, tutorials, snippets, rants, and everything else. Subscribe for updates as they happen.</p>
            </div>
            <div>
                {
                    blogList.map((blogItem) => {
                        return <BlogCard blog={blogItem}></BlogCard>
                    })
                }
            </div>

            <div className="mt-auto flex flex-row items-center justify-center ">
                <Pagination
                    postsPerPage={blogsPerPage}
                    totalPosts={testBlogs.length}
                    paginateBack={paginateBack}
                    paginateFront={paginateFront}
                    currentPage={currentPage}
                />
            </div>

        </div>
    )
}

export default Blogs