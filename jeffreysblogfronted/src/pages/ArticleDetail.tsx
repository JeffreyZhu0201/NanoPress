import React from "react"
import { useParams } from "react-router-dom"

function BlogDetail() {

    var { blogId } = useParams();

    var content = "I'm content"
    var date = "I'm date"
    var title = "I'm title"
    var author = "I'm author"


    return (<div className="bg-slate-400">
        <div className="bg-green-200 p-4 md:p-6">
            <div className="mt-4 md:mt-8 border-b-1 border-gray-700">
                <div className="flex items-center py-2 md:py-4">
                    <h1 className="text-3xl md:text-4xl font-bold line-clamp-2 overflow-ellipsis text-white">{title}</h1>
                </div>

                <div className="flex justify-between items-center text-gray-600 text-sm md:text-base mb-4">
                    <div>Author : {author}</div>
                    <div>{date}</div>
                </div>
            </div>

            <div className="mt-4 md:mt-8">
                {content}
            </div>

        </div>

    </div>)
}

export default BlogDetail

