import { configureStore } from '@reduxjs/toolkit';
import { pokedex } from './reducers/pokedex';

const store = configureStore({
    reducer: pokedex
});

export default store;
