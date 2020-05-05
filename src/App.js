import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokedex } from './store/reducers/pokedex';

import './styles/style.scss';
import { SpinnerCircularFixed } from 'spinners-react';
const Router = lazy(() => import('./router'));

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokedex());
    }, [dispatch]);

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
            <Router />
        </Suspense>
    );
};

export default App;
