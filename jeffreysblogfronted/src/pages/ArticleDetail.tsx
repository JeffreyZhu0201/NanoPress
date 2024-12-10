/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-29 11:08:05
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-12-10 09:49:31
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\pages\ArticleDetail.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../common/Http/postData"
import Post from "../common/entity/Post";

import Markdown from "react-markdown"


function ArticleDetail() {
    const { type, id } = useParams();
    let [article, setArticle] = useState({} as Post);

    useEffect(() => {
        const FetchArticleDetail = async () => {
            try {
                getPostById(id).then(res => {
                    setArticle(res.data.data)
                })
            } catch (err) {
            }
        }
        FetchArticleDetail();
    }, [id])

    return (
        <div className="bg-green-200 p-4 md:p-6 h-screen">
            <div className="mt-4 md:mt-8 border-b-1 border-gray-700">
                <div className="flex items-center py-2 md:py-4">
                    <h1 className="text-3xl md:text-4xl font-bold line-clamp-2 overflow-ellipsis">[{(type === "project") ? "项目" : "博客"}] {article?.title}</h1>
                </div>

                <div className="flex justify-between items-center text-gray-600 text-sm md:text-base mb-4">
                    <div> Author : {article.author?.name} </div>
                    <div>{article?.date}</div>
                </div>
            </div>
            <div className="mt-4 md:mt-8">
                <Markdown>{article?.content}</Markdown>
            </div>
        </div>)

}

export default ArticleDetail

