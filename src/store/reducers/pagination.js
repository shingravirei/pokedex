import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        lower: 0,
        upper: 20,
        pokesPerPage: 20
    },
    reducers: {
        setSliceLimit: (state, action) => {
            const { lower, upper } = action.payload;

            return {
                ...state,
                lower,
                upper
            };
        }
    }
});

const { actions } = paginationSlice;
const { setSliceLimit } = actions;

export { paginationSlice, actions, setSliceLimit };
