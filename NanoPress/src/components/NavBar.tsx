/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-25 20:52:43
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-03 22:52:35
 * @FilePath: \NanoPress\NanoPress\src\components\NavBar.tsx
 * @Description: 导航栏组件
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */

// 导入必要的图标、React钩子和路由组件
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import links from "../common/Links"
import { Link } from "react-router-dom"

function NavBar() {
    // 状态管理：控制移动端导航菜单的显示/隐藏
    const [nav, setNav] = useState(false)

    // 切换导航菜单显示状态的处理函数
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        // 导航栏主容器，使用Tailwind CSS进行样式设置
        <div className="flex justify-between items-center h-20 md:h-24 w-full mx-auto px-4 text-white bg-slate-600 md:px-10">
            {/* 网站标题 */}
            <h1 className="w-full text-3xl font-bold text-[#00df9a] hover:text-[#00df00] cursor-pointer duration-300">Nano Press v1</h1>

            {/* 桌面端导航菜单 */}
            <ul className='hidden md:flex font-bold text-lg'>
                {
                    // 渲染导航链接，只显示number为1的项目
                    links.map((item, index) => {
                        if (item.name && item.number === 1) {
                            return <Link key={index} to={item.path} replace className='p-4 hover:underline hover:decoration-solid hover:underline-offset-8 decoration-4 cursor-pointer transition-colors duration-500 text-nowrap'>{item.name}</Link>
                        }
                        return null;
                    })
                }
            </ul>

            {/* 移动端菜单按钮 */}
            <div onClick={handleNav} className='block md:hidden'>
                {
                    // 根据导航菜单状态显示不同的图标
                    !nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />
                }
            </div>

            {/* 移动端侧边导航菜单 */}
            <div className={nav ? ' fixed right-0 top-0 w-[60%] h-full border-r bg-slate-600 ease-in-out duration-500 md:hidden' : "fixed right-[-60%] top-0 w-[60%] h-full border-r bg-slate-600 ease-in-out duration-500 md:hidden"}>
                {/* 移动端导航标题 */}
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-8'>Nano Press v1</h1>

                {/* 移动端导航链接列表 */}
                <ul className='uppercase p-4'>
                    {
                        // 渲染所有导航链接
                        links.map((item, index) => {
                            return <li key={index} className='p-4 border-b border-gray-600'>{item.name}</li>
                        })
                    }
                    {/* 移动端关闭按钮 */}
                    <div onClick={handleNav} className='block md:hidden p-4 my-10'>
                        {
                            !nav ? <></> : <AiOutlineClose size={40} />
                        }
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default NavBar