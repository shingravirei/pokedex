import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services';

const fetchPokedex = createAsyncThunk('pokemon/fetchPokedex', async () => {
    const res = await api.fetchPokedex();

    return res;
});

const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState: [],
    reducers: {},
    extraReducers: {
        [fetchPokedex.fulfilled]: (state, action) => action.payload
    }
});

export { pokedexSlice, fetchPokedex };
