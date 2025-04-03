/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-30 20:21:43
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-03 17:11:18
 * @FilePath: \NanoPress\NanoPress\src\common\entity\Post.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

interface Post {
    ID: string,
    title: string,
    author_id: string,
    read: string,
    CreatedAt: string,
    content: string,
    tag_id: string,
    likes:Number
}

export default Post