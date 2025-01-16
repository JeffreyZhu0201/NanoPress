/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-29 11:08:05
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-16 12:05:14
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\pages\ArticleDetail.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../common/Http/postData"
import { getProjectById } from "../common/Http/projectData"

import Markdown from "react-markdown"
import Project from "../common/entity/Project"
import Post from "../common/entity/Post"
import { getAuthorNameById } from "../common/Http/authorData"


function ArticleDetail() {
    const { type, id } = useParams();
    const [article, setArticle] = useState({} as Post | Project);
    const [authorName,setAuthorName] = useState({} as string);
    useEffect(() => {
        const FetchArticleDetail = async () => {
            if (type === "post") {
                try {
                    await getPostById(id as string).then(res => {
                        setArticle(res.data.data as Post)
                    })
                    
                    if ((article as Post)?.authorId) {
                        await getAuthorNameById((article as Post).authorId).then(res => {
                            setAuthorName(res.data.data.authorName);
                        })
                    }
                } 
                catch (err) {
                    console.log(err)
                }
            }
            else {
                try {
                    getProjectById(id).then(res => {
                        setArticle(res.data.data)
                    })
                } catch (err) {
                }
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
                    {(type === "post") ? <div>作者：{authorName}</div>:<></>}
                    <div>{article?.date}</div>
                </div>
            </div>
            <div className="mt-4 md:mt-8">
                <Markdown>{article?.content}</Markdown>
            </div>
        </div>)

}

export default ArticleDetail


