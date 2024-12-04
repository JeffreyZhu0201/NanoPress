/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-30 20:21:43
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-12-04 14:12:26
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
    readNum: string,
    date: string,
    content: string,
    category: { name: string, color: string }[]
}

export default Post