import React from 'react';
import { useSelector } from 'react-redux';

import PokeCard from '../../components/PokeCard';
import Infinite from '../../components/Infinite';

const Type = ({ type }) => {
    const pokemons = useSelector((state) =>
        state.pokedex.filter((pokemon) => pokemon.types.includes(type))
    );

    const [upper, setUpper] = React.useState(0);

    return (
        <Infinite setUpper={setUpper} pokemonSliceSize={pokemons.length}>
            <div className={'container'}>
                {pokemons.slice(0, upper).map((pokemon) => (
                    <PokeCard key={pokemon.id} {...pokemon} />
                ))}
            </div>
        </Infinite>
    );
};

export default Type;
