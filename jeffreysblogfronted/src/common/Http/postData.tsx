/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-12-04 10:39:24
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-16 11:06:34
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\common\Http\postData.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import axios from "axios";
import staticResource from "../staticResource";

export function getRangePost(beginPage:number,count:number){
    return axios({
        method:'get',
        url:staticResource.baseUrl + '/post/getrangeposts',
        params:{
            beginPage,
            count
        }
    })
}

export function getPostById(postId:any){
    return axios({
        method:'get',
        url:staticResource.baseUrl + '/post/getpostbyid',
        params:{
            postId
        }
    })
}

export function getAllPost(beginPage:number,count:number){
    
}

