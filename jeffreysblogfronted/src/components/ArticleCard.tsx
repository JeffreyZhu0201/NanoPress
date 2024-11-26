/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-26 15:46:51
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-27 00:31:50
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\components\ArticleCard.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import React from "react"

//{title:string;intro:string;date:string}

function ArticleCard(title:any,intro:any,date:any){
    
    return (
        <div className="flex flex-col bg-neutral-600 rounded">
            <div className="m-4 md:m-6">
                <h1 className="text-xl md:text-2xl font-bold text-white truncate md:mb-2">{ title }</h1>
                <div className="box line-clamp-1 md:line-clamp-2 text-sm font-thin text-white">{ intro}</div>
                <div className="text-right text-white text-sm">{date}</div>
            </div>
        </div>
    )
}

export default ArticleCard
