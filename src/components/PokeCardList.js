import * as React from 'react';
import { useSelector } from 'react-redux';

import PokeCard from './PokeCard';
import Pagination from './Pagination';

const PokeCardList = () => {
    const pokemons = useSelector((state) => state.pokedex);
    const { lower, upper } = useSelector((state) => state.pagination);

    return (
        <>
            <div className={'container'}>
                {pokemons.slice(lower, upper).map((pokemon) => (
                    <PokeCard key={pokemon.id} {...pokemon} />
                ))}
            </div>
            <Pagination />
        </>
    );
};

export default PokeCardList;
