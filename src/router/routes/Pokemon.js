import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

import { SpinnerCircularFixed } from 'spinners-react';

const PokeEntry = lazy(() => import('../../components/PokeEntry'));

const Pokemon = ({ id }) => {
    const pokemons = useSelector((state) =>
        state.pokedex.find((pokemon) => pokemon.id === Number(id))
    );

    return (
        <Suspense
            fallback={
                <SpinnerCircularFixed
                    color="#000"
                    size={50}
                    speed={125}
                    thickness={100}
                />
            }
        >
            {pokemons && <PokeEntry pokemon={pokemons} />}
        </Suspense>
    );
};

export default Pokemon;
