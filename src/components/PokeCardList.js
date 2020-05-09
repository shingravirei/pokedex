import * as React from 'react';
import { useSelector } from 'react-redux';

import PokeCard from './PokeCard';
import Infinite from './Infinite';

const PokeCardList = () => {
    const pokemons = useSelector((state) => state.pokedex);

    const [upper, setUpper] = React.useState(0);

    return (
        <>
            <Infinite setUpper={setUpper} pokemonSliceSize={pokemons.length}>
                <div className={'container'}>
                    {pokemons.slice(0, upper).map((pokemon) => (
                        <PokeCard key={pokemon.id} {...pokemon} />
                    ))}
                </div>
            </Infinite>
        </>
    );
};

export default PokeCardList;
