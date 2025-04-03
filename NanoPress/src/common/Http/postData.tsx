/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-03-31 15:14:59
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-03 16:58:32
 * @FilePath: \NanoPress\NanoPress\src\common\Http\postData.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-12-04 10:39:24
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-03 16:48:04
 * @FilePath: \NanoPress\NanoPress\src\common\Http\postData.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import axios from "axios";

export function getRangePost(beginPage:number,count:number){
    return axios({
        method:'get',
        url:`/api/post/`,
        params:{
            start_index:beginPage,
            limited:count
        }
    })
}

export function getPostById(postId:any){
    return axios({
        method:'get',
        url: `/api/post/${postId}`
    })
}

export function getAllPost(beginPage:number,count:number){
    
}

