import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
} from '@reduxjs/toolkit';
import { pokedexSlice } from './reducers/pokedex';
import { paginationSlice } from './reducers/pagination';

const rootReducer = combineReducers({
    pokedex: pokedexSlice.reducer,
    pagination: paginationSlice.reducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware({
            thunk: true,
            immutableCheck: false,
            serializableCheck: false
        })
    ]
});

export default store;
