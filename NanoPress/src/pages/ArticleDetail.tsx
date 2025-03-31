/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-29 11:08:05
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-17 15:49:42
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\pages\ArticleDetail.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../common/Http/postData"
import { getProjectById } from "../common/Http/projectData"

import Project from "../common/entity/Project"
import Post from "../common/entity/Post"
import { getAuthorNameById } from "../common/Http/authorData"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ArticleDetail() {
    const { type, id } = useParams();
    const [article, setArticle] = useState({} as Post | Project);
    const [authorName, setAuthorName] = useState("");

    const components = {
        h1: ({...props}: { [key: string]: any }) => <h1 className="text-3xl font-bold" {...props} aria-label={props.children}>{props.children}</h1>,
        h2: ({...props}: { [key: string]: any }) => <h2 className="text-2xl font-semibold" {...props} aria-label={props.children}>{props.children}</h2>,
        p: ({...props}: { [key: string]: any }) => <p className="text-base" {...props} />,
        code: ({...props}: { [key: string]: any }) => <code className="bg-gray-200 p-1 rounded" {...props} />,
        // Add more custom components as needed
    };

    useEffect(() => {
        const FetchArticleDetail = async () => {
            if (type === "post") {
                try {
                    await getPostById(id as string).then(async res => {
                        console.log(res.data.data)
                        const post = res.data.data as Post;
                        setArticle(post);
                        if (post.authorId) {
                            await getAuthorNameById(post.authorId).then(res => {
                                setAuthorName(res.data.data.authorName);
                            })
                        }
                    })
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
    }, [id, type])

    return (
        <div className="bg-green-200 p-4 md:p-6 h-screen">
            <div className="mt-4 md:mt-8 border-b-1 border-gray-700">
                <div className="flex items-center py-2 md:py-4">
                    <h1 className="text-3xl md:text-4xl font-bold line-clamp-2 overflow-ellipsis">[{(type === "project") ? "项目" : "博客"}] {article?.title}</h1>
                </div>

                <div className="flex justify-between items-center text-gray-600 text-sm md:text-base mb-4">
                    {(type === "post") ? `作者：${authorName}` : ''}
                    <div>{article?.date}</div>
                </div>
            </div>
            <div className="markdown mt-4 md:mt-8">
                <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
                    {article?.content}
                </ReactMarkdown>
            </div>
        </div>)
}

export default ArticleDetail


