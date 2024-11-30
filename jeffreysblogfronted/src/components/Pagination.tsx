/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import {GoChevronLeft, GoChevronRight } from "react-icons/go"

export default function Pagination(props: {
    postsPerPage: number,
    totalPosts: number,
    paginateFront: any,
    paginateBack: any,
    currentPage: number,
}) {
    
    const items = [...Array(Math.ceil(props.totalPosts / props.postsPerPage))].map((_item,_itemIndex)=>{
        return <div className={`h-10 w-10 cursor-pointer rounded-full mx-1 flex flex-row items-center justify-center ${(props.currentPage === (_itemIndex+1)) ?'bg-blue-500':'bg-red-100'}`}>
            {_itemIndex+1}
        </div>
    })

    return (
        <div className='py-2 flex flex-row items-center'>
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
                    className={`${(props.currentPage === 1)?'pointer-events-none':''} flex flex-row items-center justify-center h-12 w-12 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
                >
                    <span><GoChevronLeft></GoChevronLeft></span>
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
                    className={`${(props.currentPage === Math.ceil(props.totalPosts / props.postsPerPage))?'pointer-events-none':''} flex flex-row items-center justify-center h-12 w-12 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
                >
                    <span><GoChevronRight></GoChevronRight></span>
                </a>
        </div>
    );
}
