import { createSlice } from '@reduxjs/toolkit';
import { savedSettings } from 'utils';
import cc from 'cryptocompare';
import moment from 'moment';
cc.setApiKey(process.env.REACT_APP_CRYPTOCOMPARE);

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		spotlightFavourite: null,
		prices: [],
		historicalPrices: null,
		timeFrame: 'days',
		...savedSettings(),
	},
	reducers: {
		setPage: (state, action) => {
			state.page = action.payload;
		},
		saveSettingsLocalStorage: (state) => {
			state.firstVisit = false;
			state.page = 'dashboard';
			state.spotlightFavourite =
				state.favourites[state.favourites.length - 1];
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
		setSpotlightFavourite: (state, action) => {
			state.spotlightFavourite = action.payload;
			localStorage.setItem(
				'cryptron',
				JSON.stringify({
					...savedSettings(),
					spotlightFavourite: action.payload,
				})
			);
		},
		setHistoricalPrices: (state, action) => {
			state.historicalPrices = action.payload;
		},
		setTimeFrame: (state, action) => {
			state.timeFrame = action.payload.toLowerCase();
		},
	},
});

export const fetchHistorical = () => async (dispatch, getState) => {
	const TIME_UNITS = 24;
	const historicalData = [];

	dispatch(setHistoricalPrices(null));

	for (let i = 0; i < TIME_UNITS; i++) {
		try {
			let priceData = await cc.priceHistorical(
				getState().app.spotlightFavourite,
				['GBP'],
				moment()
					.subtract({ [getState().app.timeFrame]: i })
					.toDate()
			);
			historicalData.push(priceData);
		} catch (error) {
			console.error(error);
		}
	}

	const returnData = [
		{
			name: getState().app.spotlightFavourite,
			data: historicalData.map((el, i) => [
				moment()
					.subtract({ [getState().app.timeFrame]: i })
					.valueOf(),
				el.GBP,
			]),
		},
	];

	dispatch(setHistoricalPrices(returnData));
};

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
	setSpotlightFavourite,
	setHistoricalPrices,
	setTimeFrame,
} = appSlice.actions;

export default appSlice.reducer;
