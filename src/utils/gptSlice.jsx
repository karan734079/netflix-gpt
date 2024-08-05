import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toogleSearchGptMovie: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    },
});

export const { toogleSearchGptMovie, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
