/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-01-16 11:06:43
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-16 11:06:49
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\common\Http\categoryData.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
import axios from 'axios';

const getCategoryData = async () => {
    try {
        const response = await axios.get('/api/categories');
        return response.data;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
};

export default getCategoryData;