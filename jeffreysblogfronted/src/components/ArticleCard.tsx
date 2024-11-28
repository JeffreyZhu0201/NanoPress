/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-27 22:26:22
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-28 14:22:42
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\components\ArticleCard.tsx
 * @Description: File Description Here..II
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import React from "react"

function ArticleCard(props:{category:string,title:string,date:string,read:string}) {

    return (
        
        <div>
           <div className="m-2 md:m-4 border-b-1 border-x-white">
                <div className="">
                    <div className="bg-green-800 text-white inline-block rounded-full text-xs md:text-sm ml-2 p-2 pt-0.5 pb-0.5 cursor-pointer hover:bg-green-200 transition-colors">{props.category}</div>
                </div>
                <div className=" text-white">
                    <div className="ml-2 text-xl md:text-2xl font-bold truncate md:m-2 cursor-pointer hover:text-green-200 transition-colors duration-500">{ props.title }</div>
                    <div className="flex m-1 md:m-2 font-thin text-sm">
                        <div>{ props.date }</div>
                        <span>&nbsp;&nbsp;&frasl;&frasl;&nbsp;&nbsp;</span>
                        <div>{props.read} read</div>
                        <div className="ml-auto text-gray-300 text-sm cursor-pointer hover:text-slate-100 transition-colors">查看更多</div>
                    </div>
                    </div>
           </div>
        </div>)
}

export default ArticleCard