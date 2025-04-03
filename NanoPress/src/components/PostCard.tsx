/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-27 22:26:22
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-03 21:32:19
 * @FilePath: \NanoPress\NanoPress\src\components\PostCard.tsx
 * @Description: File Description Here..II
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import { Link } from "react-router-dom"
import Post from "../common/entity/Post"
import { getTagById } from "../common/Http/tagData"
import { useEffect, useState } from "react"

function PostCard(props: { post: Post }) {

    const [tag, setTag] = useState()
    useEffect(() => {
        const FetchTag = async () => {
            console.log(props.post)
            try {
                var tag_id = props.post.tag_id
                var tagItem = await getTagById(tag_id)
                if (tagItem.data.code === 200) {
                    setTag(tagItem.data.data.tag_name)
                }
                else {
                    console.log(tagItem.data.message)
                }
            } catch (e) {
                console.log(e)
            }
        }
        FetchTag();
    }, [])

    return (
        <>
            <Link to={`/articledetail/post/${props.post.ID}`}>
                <div className="m-2 md:m-4 border-b-1 border-x-white">
                    <div className="">
                        {/* {
                            category.map((categoryItem,index) => {
                                return <div key={index} className={`${categoryItem.textColor}  ${categoryItem.bgColor} inline-block rounded-full text-xs md:text-sm ml-2 p-2 pt-0.5 pb-0.5 cursor-pointer hover:bg-green-200`}>{categoryItem.categoryName}</div>
                            })
                        } */}

                    </div>
                    <div className=" text-white">
                        <div className="flex flex-row justify-between">
                            <div className="ml-2 text-2xl md:text-2xl font-bold truncate md:m-2 cursor-pointer hover:text-green-200 transition-colors duration-500">{props.post.title}</div>
                            <div className="my-auto text-gray-300">{tag}</div>
                        </div>
                        

                        <div className="flex m-1 md:m-2 font-thin text-sm">
                            <div>{props.post.CreatedAt}</div>
                            <span>&nbsp;&nbsp;&frasl;&frasl;&nbsp;&nbsp;</span>
                            <div>{props.post.read} read</div>
                            <div className="ml-auto text-gray-300 text-sm cursor-pointer hover:text-slate-100 transition-colors">查看更多</div>
                        </div>
                    </div>
                </div>
            </Link ></>)
}

export default PostCard