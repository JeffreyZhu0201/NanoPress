/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-30 20:21:43
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-16 10:57:48
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\common\entity\Post.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

interface Post {
    id: string,
    title: string,
    authorId: string,
    readNum: string,
    date: string,
    content: string,
    categoryId: string[]
}

export default Post