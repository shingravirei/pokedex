import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokedex } from './store/reducers/pokedex';

import './styles/style.scss';
const PokeCardList = lazy(() => import('./components/PokeCardList'));

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokedex());
    }, [dispatch]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PokeCardList pokemons />
        </Suspense>
    );
};

export default App;
