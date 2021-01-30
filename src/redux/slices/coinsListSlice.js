import { createSlice } from '@reduxjs/toolkit';
import { sortByKeyValue, filterObjToArr } from 'utils';
const cc = require('cryptocompare');
cc.setApiKey(process.env.REACT_APP_CRYPTOCOMPARE);

const filtersList = ['BTC', 'XRP', 'ETH', 'DOGE'];

export const coinsListSlice = createSlice({
	name: 'coinsList',
	initialState: {},
	reducers: {
		setCoinsList: (state, action) => {
			return filterObjToArr(filtersList, action.payload);
		},
	},
});

export const { setCoinsList } = coinsListSlice.actions;

export const fetchCoins = () => async (dispatch) => {
	let coinList = await cc.coinList();
	dispatch(setCoinsList(coinList.Data));
};

export const selectAggregatedListingData = (state) => {
	let aggregatedData = [];

	if (state.coinsList.length) {
		aggregatedData = state.coinsList.map((el) => {
			return { CoinName: el.CoinName, symbol: el.Symbol };
		});
	}

	aggregatedData.sort(sortByKeyValue);
	return aggregatedData;
};

export default coinsListSlice.reducer;
