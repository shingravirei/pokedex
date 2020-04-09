import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokedex } from '../store/reducers/pokedex';

import PokeCard from './PokeCard';
import Pagination from './Pagination';

const PokeCardList = () => {
    const [pagination, setPagination] = useState({
        min: 0,
        max: 0
    });
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.reducer);

    useEffect(() => {
        dispatch(fetchPokedex());
    }, [dispatch]);

    return (
        <>
            <div className={'container'}>
                {pokemons
                    .slice(pagination.min, pagination.max)
                    .map((pokemon) => (
                        <PokeCard key={pokemon.id} {...pokemon} />
                    ))}
            </div>
            <Pagination setPagination={setPagination} />
        </>
    );
};

export default PokeCardList;
