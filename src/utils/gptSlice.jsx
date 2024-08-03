import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch : false,
    },
    reducers: {
        toogleSearchGptMovie: (state)=>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
});

export const { toogleSearchGptMovie } = gptSlice.actions;

export default gptSlice.reducer;
