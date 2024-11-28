/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 21:12:26
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-28 15:01:49
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\components\FootBar.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import React from "react"
import { AiFillGithub, AiFillTwitterCircle, AiOutlineGithub } from "react-icons/ai"
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import {useState} from 'react'

function FootBar(){

    // const [nav,setNav] = useState(false)

    // const handleNav = ()=>{
    //     setNav(!nav)
    // }

    return (
        <div className="items-center flex justify-between p-4 md:p-12 bg-slate-600">
            <div className="text-white text-lg md:text-xl font-bold">
                JeffreysBlog © 2024 JeffreyZhu
            </div>
            <div className="flex items-center gap-4">
                <AiFillGithub color="white" size={26}></AiFillGithub>
                <AiFillTwitterCircle color="white" size={26}></AiFillTwitterCircle>
            </div>
        </div>
    )

}

export default FootBar