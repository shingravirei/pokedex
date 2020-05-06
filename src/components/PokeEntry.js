import React from 'react';

const PokeEntry = ({ pokemon }) => {
    return (
        <div>
            <p>#{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <p>{pokemon.flavortext.text}</p>
        </div>
    );
};

export default PokeEntry;
