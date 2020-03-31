import React, { Suspense, lazy } from 'react';
import './styles/style.scss';

const HelloWorld = lazy(() => import('./components/HelloWorld'));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={'container'}>
                <HelloWorld />
                <HelloWorld />
                <HelloWorld />
                <HelloWorld />
            </div>
        </Suspense>
    );
};

export default App;
