import React from 'react';
import { useSelector } from 'react-redux';

import PokeCard from '../../components/PokeCard';
import Pagination from '../../components/Pagination';

const Type = ({ type }) => {
    const pokemons = useSelector((state) =>
        state.pokedex.filter((pokemon) => pokemon.types.includes(type))
    );

    return (
        <div className={'container'}>
            {pokemons.map((pokemon) => (
                <PokeCard key={pokemon.id} {...pokemon} />
            ))}
        </div>
    );
};

export default Type;
