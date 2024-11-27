
import React from "react"

function ArticleCard(props:{category:string,title:string,date:string,read:string}) {

    return (
        
        <div>
           <div className="m-2 border-b-1 border-x-white">
                <div className="">
                    <div className="bg-green-800 text-white inline-block rounded-full text-sm md:text-base m-2 p-2 pt-1 pb-1 cursor-pointer hover:bg-green-200 transition-colors">{props.category}</div>
                </div>
                <div className="cursor-pointer text-white hover:text-gray-500 transition-colors duration-700">
                    <div className="m-2 text-xl md:text-2xl font-bold truncate md:mb-2">{ props.title }</div>
                        <div className="flex m-2 font-thin text-sm">
                            <div>{ props.date}</div>
                            <span>//</span>
                            <div>{props.read} read</div>
                            <div className="ml-auto text-gray-300 text-sm cursor-pointer hover:text-slate-100 transition-colors">查看更多</div>
                        </div>
                    </div>

           </div>

        </div>)
}

export default ArticleCard