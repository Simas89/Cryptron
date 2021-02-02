import { createSlice } from '@reduxjs/toolkit';
import { savedSettings } from 'utils';
import cc from 'cryptocompare';
cc.setApiKey(process.env.REACT_APP_CRYPTOCOMPARE);

export const appSlice = createSlice({
	name: 'app',
	initialState: { ...savedSettings(), prices: [] },
	reducers: {
		setPage: (state, action) => {
			state.page = action.payload;
		},
		saveSettingsLocalStorage: (state) => {
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
			if (state.favourites.length < 12)
				state.favourites.push(action.payload);
		},
		removeFromFavourites: (state, action) => {
			const index = state.favourites.indexOf(action.payload);
			state.favourites.splice(index, 1);
		},
		setPrices: (state, action) => {
			state.prices = action.payload;
		},
	},
});

export const fetchPrices = () => async (dispatch, getState) => {
	const favourites = getState().app.favourites;
	const returnData = [];

	for (let i = 0; i < favourites.length; i++) {
		try {
			let priceData = await cc.priceFull(favourites[i], 'USD');
			returnData.push(priceData);
		} catch (error) {
			console.error(error);
		}
	}

	dispatch(setPrices(returnData));
};

export const confirmFavourites = () => (dispatch) => {
	dispatch(saveSettingsLocalStorage());
};

export const {
	setPage,
	saveSettingsLocalStorage,
	addToFavourites,
	removeFromFavourites,
	setPrices,
} = appSlice.actions;

export default appSlice.reducer;
