import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Pokemon = ({ id }) => {
    const pokemons = useSelector((state) => state.pokedex);

    useEffect(() => {
        if (pokemons.length > 0) {
            console.log(pokemons.find((pokemon) => pokemon.id === Number(id)));
        }
    }, [id, pokemons]);

    return <h1>Pokemon Route {id} </h1>;
};

export default Pokemon;
