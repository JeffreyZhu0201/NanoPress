/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-27 22:26:22
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-16 11:05:37
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\components\PostCard.tsx
 * @Description: File Description Here..II
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import CategoryColor from "../common/entity/CategoryColor"
import { Link } from "react-router-dom"
import Post from "../common/entity/Post"
import { useEffect, useState } from "react"

function BlogCard(props: {post:Post}) {
    
    const [category,setCategory] = useState([])

    useEffect(()=>{
        function FetchCategory(){
            props.post.categoryId.map((categoryItem,index) => {

                

                const category = CategoryColor.find((item) => item.id === categoryItem)
                if(category){
                    categoryItem.bgColor = category.bgColor;
                    categoryItem.textColor = category.textColor;
                }
            })
        }
        FetchCategory();
    },[])

    return (
        <>
            <Link to={`/articledetail/post/${props.post.id}`}>
                <div className="m-2 md:m-4 border-b-1 border-x-white">
                    <div className="">
                        {
                            props.post.categoryId.map((categoryItem,index) => {
                                return <div key={index} className={`${categoryItem.textColor} ${categoryItem.bgColor}  inline-block rounded-full text-xs md:text-sm ml-2 p-2 pt-0.5 pb-0.5 cursor-pointer hover:bg-green-200 transition-colors`}>{categoryItem.name}</div>
                            })
                        }
                    </div>
                    <div className=" text-white">
                        <div className="ml-2 text-xl md:text-2xl font-bold truncate md:m-2 cursor-pointer hover:text-green-200 transition-colors duration-500">{props.post.title}</div>
                        <div className="flex m-1 md:m-2 font-thin text-sm">
                            <div>{props.post.date}</div>
                            <span>&nbsp;&nbsp;&frasl;&frasl;&nbsp;&nbsp;</span>
                            <div>{props.post.readNum} read</div>
                            <div className="ml-auto text-gray-300 text-sm cursor-pointer hover:text-slate-100 transition-colors">查看更多</div>
                        </div>
                    </div>
                </div>
            </Link ></>)
}

export default BlogCard