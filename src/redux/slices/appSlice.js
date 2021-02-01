import { createSlice } from '@reduxjs/toolkit';
import { savedSettings } from 'utils';

export const appSlice = createSlice({
	name: 'app',
	initialState: { ...savedSettings() },
	reducers: {
		setPage: (state, action) => {
			state.page = action.payload;
		},
		saveSettingsLocalStorage: (state, action) => {
			state.firstVisit = false;
			state.page = 'dashboard';
			localStorage.setItem(
				'cryptron',
				JSON.stringify({
					firstVisit: state.firstVisit,
					page: 'dashboard',
					favourites: state.favourites,
				})
			);
		},
		addToFavourites: (state, action) => {
			console.log(state);
			if (state.favourites.length < 12)
				state.favourites.push(action.payload);
		},
		removeFromFavourites: (state, action) => {
			const index = state.favourites.indexOf(action.payload);
			state.favourites.splice(index, 1);
		},
	},
});

export const confirmFavourites = () => (dispatch, getState) => {
	dispatch(saveSettingsLocalStorage());
};

export const {
	setPage,
	saveSettingsLocalStorage,
	addToFavourites,
	removeFromFavourites,
} = appSlice.actions;

export default appSlice.reducer;
