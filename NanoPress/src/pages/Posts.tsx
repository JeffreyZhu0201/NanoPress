/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 21:03:31
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-03 22:03:43
 * @FilePath: \NanoPress\NanoPress\src\pages\Posts.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import React, { useEffect, useState } from "react"
import Pagination from "../components/Pagination"
import { getRangePost } from "../common/Http/postData"
import PostCard from "../components/PostCard";
import { ISO_TO_Local } from "../common/utils/timeFormat";
import Post from "../common/entity/Post";

function Posts() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postLength,setPostLength] = useState(0);
    const [postsPerPage] = useState(5);

    const [postList,setPostList] = useState([] as Post[])

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                await getRangePost(currentPage,postsPerPage).then(res=>{
                    setPostList(res.data.data.posts);
                    setPostLength(res.data.data.count);
                })
            }catch(err){

            }
            //const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            //setPosts(res.data);
        };
        fetchPosts();
    }, [currentPage,postsPerPage]);

    // Change page
    const paginateFront = () => setCurrentPage(currentPage + 1);    
    const paginateBack = () => setCurrentPage(currentPage - 1);

    return (
        <div className="p-2 md:pt-16 md:px-16 bg-slate-700 h-full min-h-screen flex flex-col">
            <div className="m-2 md:mb-16">
                <h1 className="font-bold text-3xl md:text-6xl text-white my-4 mb-8">Posts</h1>
                <p className="text-base md:text-lg text-white overflow-ellipsis">Articles, tutorials, snippets, rants, and everything else. Subscribe for updates as they happen.</p>
            </div>
            <div>
                {
                    postList.map((postItem,index) => {
                        postItem.CreatedAt = ISO_TO_Local(postItem.CreatedAt)
                        return <PostCard key={index} post={postItem}></PostCard>
                    })
                }
            </div>
            <div className="mt-auto flex flex-row items-center justify-center">
                <Pagination
                    PerPage={postsPerPage}
                    total={postLength}
                    paginateBack={paginateBack}
                    paginateFront={paginateFront}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default Posts