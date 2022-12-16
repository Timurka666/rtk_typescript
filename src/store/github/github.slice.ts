import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const LS_FAV_KEY = 'rfk';

interface GithubState {
    favourites: string[]
};

const initialState: GithubState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
};

export const GithubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavourite: (state, action: PayloadAction<string>) => {
            state.favourites.push(action.payload);
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
        },
        removeFavourite: (state, action: PayloadAction<string>) => {
            state.favourites.filter(el => el !== action.payload);
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
        }
    }
});

export const githubActions = GithubSlice.actions;
export const githubReducer = GithubSlice.reducer;