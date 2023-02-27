import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <div className='flex justify-center mb-4'>
            <ul
                className="inline-flex space-x-px"
            >
                {/* Left navigation arrow */}
                {currentPage !== 1 ? <li

                    className={classnames('px-3 py-2 ml-0 hover:cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700', {
                        disabled: currentPage === 1
                    })}
                    onClick={onPrevious}
                >Previous
                </li> : ''}
                {paginationRange.map(pageNumber => {

                    // If the pageItem is a DOT, render the DOTS unicode character
                    if (pageNumber === DOTS) {
                        return <li className="pagination-item dots">&#8230;</li>;
                    }

                    // Render our Page Pills
                    return (
                        <li
                            className={classnames('hover:cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700', {
                                selected: pageNumber === currentPage
                            })}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                {/*  Right Navigation arrow */}
                <li
                    className="px-3 py-2 hover:cursor-pointer ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
                    onClick={onNext}
                >Next
                    <div className="arrow left" />
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
