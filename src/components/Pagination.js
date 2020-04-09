import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

const Pagination = ({ setPagination }) => {
    const pokePerPage = 20;
    const pageCount = useSelector(
        (state) => Math.ceil(state.reducer.length) / pokePerPage
    );

    return (
        <ReactPaginate
            initialPage={0}
            pageCount={pageCount}
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
                    min: selected * pokePerPage,
                    max: (selected + 1) * pokePerPage
                });
                window.scrollTo(0, 0);
            }}
        />
    );
};

export default Pagination;
