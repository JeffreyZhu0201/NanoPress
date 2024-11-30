/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 21:12:26
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-30 12:09:40
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\components\FootBar.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
import React from "react"
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai"
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import {useState} from 'react'

function FootBar() {

    // const [nav,setNav] = useState(false)

    // const handleNav = ()=>{
    //     setNav(!nav)
    // }

    return (
        <div className="items-center flex justify-center md:justify-between p-2 md:p-12 bg-slate-600 mt-auto flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center md:items-start">
                <div className="text-white md:text-xl font-bold">
                    JeffreysBlog © 2024 JeffreyZhu
                </div>
                <div className="text-gray-400 font-thin ">
                    备案号:1234567890123456789
                </div>
            </div>

            <div className="flex items-center gap-4">
                <AiFillGithub color="white" size={26}></AiFillGithub>
                <AiFillTwitterCircle color="white" size={26}></AiFillTwitterCircle>
            </div>
        </div>
    )

}

export default FootBar