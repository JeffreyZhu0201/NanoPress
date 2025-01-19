/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-01-16 11:36:14
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-17 15:20:25
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\common\Http\authorData.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */

import axios from "axios";
import staticResource from "../staticResource";

export function getAuthorNameById(authorId:string){
    return axios({
        method:'get',
        url:staticResource.baseUrl + '/author/getauthornamebyid',
        params:{
            authorId:authorId
        }
    })
}

