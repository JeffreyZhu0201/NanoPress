/*
 * @Author: JeffreyZhu 1624410543@qq.com
 * @Date: 2024-11-30 19:46:25
 * @LastEditors: JeffreyZhu 1624410543@qq.com
 * @LastEditTime: 2024-12-10 10:00:52
 * @FilePath: \JeffreysBlog\jeffreysblogfronted\src\components\Pagination.tsx
 * @Description: File Description Here...
 * 
 * 
 * Copyright (c) 2024 by JeffreyZhu, All Rights Reserved. 
 */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */

import { GoChevronLeft, GoChevronRight } from "react-icons/go"

export default function Pagination(props: {
    PerPage: number,
    total: number,
    paginateFront: any,
    paginateBack: any,
    currentPage: number,
    setCurrentPage: any
}) {

    var items = [...Array(Math.ceil(props.total / props.PerPage))].map((_item, _itemIndex) => {
        return <a key={_itemIndex} className={`h-10 w-10 cursor-pointer rounded-full mx-1 flex flex-row items-center justify-center select-none transition-all hover:bg-blue-300 duration-700 ease-in-out ${(props.currentPage === (_itemIndex + 1)) ? 'bg-blue-500' : 'bg-red-100'}`} onClick={() => handleClick(_itemIndex)}>
            {_itemIndex+1}
        </a>
    }).slice(Math.max(0,props.currentPage-3),Math.min(Math.max(0,props.currentPage-3)+5,Math.ceil(props.total / props.PerPage)))

    // var [items,setItemsVal] = useState(a.slice(0,5));

    function handleClick(_itemIndex: number) {
        // setItemsVal(a.slice(Math.max(_itemIndex-1,0),Math.min(Math.max(_itemIndex-1,0)+4,Math.ceil(props.totalPosts / props.postsPerPage))));
        props.setCurrentPage(_itemIndex+1)
    }

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
                className={`${(props.currentPage === 1) ? 'pointer-events-none cursor-not-allowed' : ''} flex flex-row items-center justify-center h-10 w-10 rounded-full border border-gray-300 bg-transparent text-sm font-medium text-gray-500 hover:bg-gray-50`}
            >
                <span><GoChevronLeft></GoChevronLeft></span>
            </a>
            <div className="flex flex-row">
                {items}
            </div>
            <a
                onClick={() => {
                    if (!(props.currentPage === Math.ceil(props.total / props.PerPage))) {
                        props.paginateFront();
                    }
                }}
                href='#'
                className={`${(props.currentPage === Math.ceil(props.total / props.PerPage)) ? 'pointer-events-none' : ''} flex flex-row items-center justify-center h-10 w-10 rounded-full border border-gray-300 bg-transparent text-sm font-medium text-gray-500 hover:bg-gray-50`}
            >
                <span><GoChevronRight></GoChevronRight></span>
            </a>
        </div>
    );
}
