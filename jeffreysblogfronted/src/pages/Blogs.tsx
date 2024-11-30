/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 21:03:31
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-30 20:12:37
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\pages\Blogs.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import React,{useEffect,useState} from "react"
import blogCard from "../components/BlogCard"
import Pagination from "../components/Pagination"

interface Blog {
    blogId: number,
    title: string,
    author: string,
    date: string,
    content: string,
    category: { name: string, color: string }[]
}

function Blogs() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

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
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);


    return (
        <div className="p-2 md:p-16 bg-slate-700 h-screen flex flex-col">
            <div className="mb-2 md:mb-16">
                <h1 className="font-bold text-xl md:text-4xl text-white mt-2 mb-8">Blogs</h1>
                <p className="text-base md:text-lg text-white overflow-ellipsis">Articles, tutorials, snippets, rants, and everything else. Subscribe for updates as they happen.</p>
            </div>
            <div>
                <blogCard title={"123"} read={"123"} date={"123"} category={[{ name: "123", color: "red" }]} blogId={"123"}></blogCard>
            </div>

            <div className="mt-auto flex flex-row items-center justify-center ">
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginateBack={paginateBack}
                    paginateFront={paginateFront}
                    currentPage={currentPage}
                />

            </div>

        </div>
    )
}

export default Blogs