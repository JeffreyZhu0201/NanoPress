import React from "react";

export default function Pagination(props: {
    postsPerPage: number,
    totalPosts: number,
    paginateFront: any,
    paginateBack: any,
    currentPage: number,
}) {

    return (
        <div className='py-2'>
            <div>
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
            <nav className='block'></nav>
            <div>
                <nav
                    className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
                    aria-label='Pagination'
                >
                    <a
                        onClick={() => {
                            props.paginateBack();
                        }}
                        href='/'
                        className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                    >
                        <span>Previous</span>
                    </a>

                    <a
                        onClick={() => {
                            props.paginateFront();
                        }}
                        href='/'
                        className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                    >
                        <span>Next</span>
                    </a>
                </nav>
            </div>
        </div>
    );
}
