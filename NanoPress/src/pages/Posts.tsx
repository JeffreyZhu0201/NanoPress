/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 21:03:31
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-03 22:51:32
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

/**
 * Posts Component - Displays a paginated list of blog posts
 */
function Posts() {
    // 分页状态管理
    const [currentPage, setCurrentPage] = useState(1);
    const [postLength, setPostLength] = useState(0);
    const [postsPerPage] = useState(5);

    // 文章列表状态管理
    const [postList, setPostList] = useState([] as Post[])

    // 当页码改变时获取文章
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // 获取当前页的文章
                await getRangePost((currentPage-1)*postsPerPage, postsPerPage).then(res => {
                    setPostList(res.data.data.posts);
                    setPostLength(res.data.data.count);
                })
            } catch(err) {
                // 错误处理
            }
        };
        fetchPosts();
    }, [currentPage, postsPerPage]);

    // 分页控制函数
    const paginateFront = () => setCurrentPage(currentPage + 1);    
    const paginateBack = () => setCurrentPage(currentPage - 1);

    return (
        <div className="p-2 md:pt-16 md:px-16 bg-slate-700 h-full min-h-screen flex flex-col">
            {/* 页面头部区域 */}
            <div className="m-2 md:mb-16">
                <h1 className="font-bold text-3xl md:text-6xl text-white my-4 mb-8">Posts</h1>
                <p className="text-base md:text-lg text-white overflow-ellipsis">
                    Articles, tutorials, snippets, rants, and everything else. Subscribe for updates as they happen.
                </p>
            </div>
            {/* 文章列表区域 */}
            <div>
                {
                    postList.map((postItem, index) => {
                        // 将时间戳转换为本地时间
                        postItem.CreatedAt = ISO_TO_Local(postItem.CreatedAt)
                        return <PostCard key={index} post={postItem}></PostCard>
                    })
                }
            </div>
            {/* 分页组件 */}
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