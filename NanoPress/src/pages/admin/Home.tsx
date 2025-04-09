import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTachometerAlt, FaFileAlt, FaTags, FaUsers } from "react-icons/fa";
import { adminLinks } from "../../common/Links";
import { Link } from "react-router-dom";

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
                    className={`${isSidebarOpen ? "w-64" : "w-16"
                        } bg-white shadow-md transition-all duration-300 justify-center items-center`}
                >
                    <div className={`flex flex-col ${isSidebarOpen ? 'items-end' : 'justify-center'}`}>
                        <button
                            className={`p-4 focus:outline-none `}
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            {isSidebarOpen ? "<" : ">"}
                        </button>
                    </div>
                    <ul className="mt-4 text-nowrap flex-row justify-center">
                        {
                            adminLinks
                                .filter(item => item.type === "backend")
                                .map((item, index) => (
                                    <Link key={index} to={item.path} className={`p-4 hover:bg-gray-200 cursor-pointer flex ${isSidebarOpen ? 'items-end' : 'justify-center'}`}>
                                        {item.icon}
                                        {isSidebarOpen && <span className="ml-4">{item.name}</span>}
                                    </Link>
                                ))
                        }
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
