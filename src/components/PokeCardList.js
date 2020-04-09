import React, { useState } from 'react';

import PokeCard from './PokeCard';
import Pagination from './Pagination';

const PokeCardList = ({ pokemons }) => {
    const [pagination, setPagination] = useState({
        min: 0,
        max: 0
    });

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
