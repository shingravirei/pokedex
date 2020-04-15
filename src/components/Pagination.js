import * as React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { setSliceLimit } from '../store/reducers/pagination';

const Pagination = () => {
    const dispatch = useDispatch();
    const pokePerPage = 20;
    const pageCount = useSelector(
        (state) => Math.ceil(state.pokedex.length) / pokePerPage
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
                const lower = selected * pokePerPage;
                const upper = (selected + 1) * pokePerPage;

                dispatch(setSliceLimit({ lower, upper }));

                window.scrollTo(0, 0);
            }}
        />
    );
};

export default Pagination;
