/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 20:51:21
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-11-26 15:02:10
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\pages\Homepage.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

import React from "react"
import Avatar from "../resource/avatar.jpeg"


function Homepage(){


    return (
        <div className="Homepage bg-slate-400 w-full flex p-2 md:p-14">
            <div className="introduction">
                <img src={Avatar} alt="" className="border-2 md:border-4 h-14 md:h-20 border-emerald-100 md:border-emerald-300 my-6 rounded-full"/>
                <p className="text-3xl font-bold md:text-4xl my-6">Hi,I am Jeffrey Zhu</p>
                <p className="text-xl font-sans my-6 ">A software engineer and open-source advocate enjoying the sunny life in Barcelona, Spain.</p>

                <div className="flex h-12 md:w-36 w-full text-2xl font-bold text-gray-200
                rounded-sm items-center justify-center bg-green-500 hover:bg-green-800 ease-in-out transition-colors hover:cursor-pointer
                ">
                    <div>Say Hello!</div>
                </div>

            </div>
            <div>

            </div>
        </div>
    )

}

export default Homepage