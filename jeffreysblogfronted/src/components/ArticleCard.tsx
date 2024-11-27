/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-26 15:46:51
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-27 21:50:27
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\components\ArticleCard.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import React from "react"

//{title:string;intro:string;date:string}

function ArticleCard(props:{title:string,intro:string,date:string}){
    
    return (
        <div className="bg-transparent border-yellow-200 rounded border">
            <div className="m-3 flex flex-col">
                <h1 className="text-xl md:text-2xl font-bold text-white truncate md:mb-2">{props.title}</h1>
                <div className="line-clamp-1 text-sm font-thin text-white">{props.intro}</div>
                <div className="grid grid-cols-2 mt-1">
                    <div className="float-start text-gray-300 text-sm">{props.date}</div>
                    <div className="float-start text-right text-gray-300 text-sm cursor-pointer hover:text-slate-100 transition-colors">了解详情</div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard
