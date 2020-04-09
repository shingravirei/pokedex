import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setPagination }) => {
    return (
        <ReactPaginate
            initialPage={0}
            pageCount={41}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            previousLabel={'prev'}
            nextLabel={'next'}
            pageClassName={'pag-li'}
            activeClassName={'pag-active'}
            containerClassName={'pagination'}
            pageLinkClassName={'pag-a'}
            onPageChange={({ selected }) => {
                setPagination({
                    min: selected * 20,
                    max: (selected + 1) * 20
                });
                window.scrollTo(0, 0);
            }}
        />
    );
};

export default Pagination;
