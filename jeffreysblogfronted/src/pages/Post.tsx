/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 21:03:31
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-12-02 19:39:44
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\pages\Post.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import React, { useEffect, useState } from "react"
import Pagination from "../components/Pagination"
import testBlogs from "../common/testData/blogData"
import Blog from "../common/entity/postEntity"
import BlogCard from "../components/BlogCard"

function Post() {

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    console.log(loading)
    const [blogsPerPage] = useState(5);

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
        <div className="p-2 md:pt-16 md:px-16 bg-slate-700 h-screen flex flex-col">
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
            <div className="mt-auto flex flex-row items-center justify-center">
                <Pagination
                    postsPerPage={blogsPerPage}
                    totalPosts={testBlogs.length}
                    paginateBack={paginateBack}
                    paginateFront={paginateFront}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default Post