import React from 'react';

const Pagination = ( {postsPerPage, totalPosts, paginate} ) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage ); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination pagination-sm justify-content-end">
                { pageNumbers.map( page => (
                    <li key={page} className="page-item">
                        <a onClick={ () => paginate(page) } href="#!" className="page-link">
                            {page}
                        </a>
                    </li>
                )) }
            </ul>
        </nav>
    )
}

export default Pagination;