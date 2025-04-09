import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTachometerAlt, FaFileAlt, FaTags, FaUsers } from "react-icons/fa";

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <>
            <Helmet>
                <title>博客管理页</title>
            </Helmet>
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <div
                    className={`${
                        isSidebarOpen ? "w-64" : "w-16"
                    } bg-white shadow-md transition-all duration-300`}
                >
                    <button
                        className="p-4 focus:outline-none"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? "<<" : ">>"}
                    </button>
                    <ul className="mt-4 text-nowrap flex-row justify-center">
                        <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
                            <FaTachometerAlt className="text-lg" />
                            {isSidebarOpen && <span className="ml-4">仪表盘</span>}
                        </li>
                        <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
                            <FaFileAlt className="text-lg" />
                            {isSidebarOpen && <span className="ml-4">文章管理</span>}
                        </li>
                        <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
                            <FaTags className="text-lg" />
                            {isSidebarOpen && <span className="ml-4">分类管理</span>}
                        </li>
                        <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
                            <FaUsers className="text-lg" />
                            {isSidebarOpen && <span className="ml-4">用户管理</span>}
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6">
                    <h1 className="text-2xl font-bold mb-4">博客管理页</h1>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p>欢迎来到博客管理页面！</p>
                        {/* 在这里添加更多内容 */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
