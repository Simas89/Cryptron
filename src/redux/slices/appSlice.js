import { createSlice } from '@reduxjs/toolkit';
import { savedSettings } from 'utils';
const cc = require('cryptocompare');
cc.setApiKey(
	'66c2e5e1a43f0e41c36cec77b7d5c3dd0ae63c692e7a40d4a821326a4e032389'
);

export const appSlice = createSlice({
	name: 'app',
	initialState: { ...savedSettings() },
	reducers: {
		setPage: (state, action) => {
			state.page = action.payload;
		},
		confirmFavourites: (state) => {
			state.firstVisit = false;
			state.page = 'dashboard';
			localStorage.setItem('cryptron', JSON.stringify({ test: 'hello' }));
		},
	},
});

export const { setPage, confirmFavourites } = appSlice.actions;

export default appSlice.reducer;
