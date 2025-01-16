/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-01-16 11:06:43
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-16 11:11:09
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\common\Http\categoryData.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
import axios from 'axios';
import staticResource from '../staticResource';

const getCategoryData = async (categoryId:string) => {
    return axios({
        method:'get',
        url:staticResource.baseUrl + '/post/getcategorybyid',
        params:{
            categoryId:categoryId
        }
    })
};

export default getCategoryData;