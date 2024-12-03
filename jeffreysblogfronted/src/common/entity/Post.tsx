/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-30 20:21:43
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-12-03 22:54:45
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\common\entity\Post.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import Author from "./Author"

interface Post {
    postId: string,
    title: string,
    author: Author,
    read: string,
    date: string,
    content: string,
    category: { name: string, color: string }[]
}

export default Post