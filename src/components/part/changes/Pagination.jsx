import React from "react";
import "./Pagination.css";

const Pagination = ({ value, setPostsPerPage, totalPosts, postsPerPage,
      setCurrentPage, currentPage, }) => {
    let pages = [];

    const defaultValue="Выбор страниц"

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const page =([
        {value: 5, name:'5'},
        {value: 6, name:'6'},
        {value: 7, name:'7'},
        {value: 8, name:'8'},
        {value: 9, name:'9'},
      ])

    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}

        <select
        value={value}
        onChange={event => setPostsPerPage(event.target.value)}
            >
            <option  disabled value=''>{defaultValue}</option>
            {page.map(page =>
                <option key={page.value} value={page.value}>
                    {page.name}
                </option>
            )}
        </select>
        </div>
    );
};

export default Pagination;
