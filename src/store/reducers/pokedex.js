import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services';

const fetchPokedex = createAsyncThunk('pokemon/fetchPokedx', async () => {
    const res = await api.fetchPokedex();

    return res;
});

const pokedex = createSlice({
    name: 'pokedex',
    initialState: [],
    reducers: {},
    extraReducers: {
        [fetchPokedex.fulfilled]: (state, action) => action.payload
    }
});

export { pokedex, fetchPokedex };
