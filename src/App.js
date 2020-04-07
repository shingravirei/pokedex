import React, { Suspense, lazy, useEffect, useState } from 'react';

import './styles/style.scss';
import axios from 'axios';
const PokeCardList = lazy(() => import('./components/PokeCardList'));

const App = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://raw.githubusercontent.com/shingravirei/pokedex-api/master/pokemons.json'
            )
            .then((res) => {
                setPokemons(res.data);
            });
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PokeCardList pokemons={pokemons} />
        </Suspense>
    );
};

export default App;
