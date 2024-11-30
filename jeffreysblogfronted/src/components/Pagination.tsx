/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

export default function Pagination(props: {
    postsPerPage: number,
    totalPosts: number,
    paginateFront: any,
    paginateBack: any,
    currentPage: number,
}) {
    
    const items = [...Array(Math.ceil(props.totalPosts / props.postsPerPage))].map((_item,_itemIndex)=>{
        return <div className="h-10 w-10 cursor-pointer bg-red-500 rounded mx-1 flex flex-row items-center justify-center">
            {_itemIndex}
        </div>
    })

    return (
        <div className='py-2 flex flex-row'>
            {/* <div>
                <p className='text-sm text-gray-700'>
                    Showing
                    <span className='font-medium'>{props.currentPage * props.postsPerPage - 10}</span>
                    to
                    <span className='font-medium'> {props.currentPage * props.postsPerPage} </span>
                    of
                    <span className='font-medium'> {props.totalPosts} </span>
                    results
                </p>
            </div>
            <nav className='block'></nav> */}
                <a
                    onClick={() => {
                        if (!(props.currentPage === 1)) {
                            props.paginateBack();
                        }
                    }}
                    href='#'
                    className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                >
                    <span>Previous</span>
                </a>
                <div className="flex flex-row">
                    {items}
                </div>
                <a
                    onClick={() => {
                        if (!(props.currentPage === Math.ceil(props.totalPosts / props.postsPerPage))) {
                            props.paginateFront();
                        }
                    }}
                    href='#'
                    className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                >
                    <span>Next</span>
                </a>
        </div>
    );
}
