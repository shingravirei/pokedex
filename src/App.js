import React, { Suspense, lazy } from 'react';

import './styles/style.scss';
const PokeCardList = lazy(() => import('./components/PokeCardList'));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PokeCardList pokemons />
        </Suspense>
    );
};

export default App;
