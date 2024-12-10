/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-12-04 10:39:24
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-12-10 15:17:18
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\common\Http\projectData.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import axios from "axios";
import staticResource from "../staticResource";

export function getRangeProjects(beginPage:number,count:number){
    return axios({
        method:'get',
        url:staticResource.baseUrl + '/project/getrangeprojects',
        params:{
            beginPage,
            count
        }
    })
}

export function getProjectById(projectId:any){
    return axios({
        method:'get',
        url:staticResource.baseUrl + '/project/getprojectbyid',
        params:{
            projectId
        }
    })
}

export function getAllProjects(beginPage:number,count:number){
    
}

