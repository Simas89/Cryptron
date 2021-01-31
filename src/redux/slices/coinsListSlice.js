import { createSlice } from '@reduxjs/toolkit';
import { sortByKeyValue, filterTopListedCoins } from 'utils';
import cc from 'cryptocompare';
cc.setApiKey(process.env.REACT_APP_CRYPTOCOMPARE);

export const coinsListSlice = createSlice({
	name: 'coinsList',
	initialState: { favourites: ['BTC', 'ETH', 'DOGE'], coinsList: [] },
	reducers: {
		setCoinsList: (state, action) => {
			state.coinsList = filterTopListedCoins(action.payload);
		},
		addToFavourites: (state, action) => {
			if (state.favourites.length < 12)
				state.favourites.push(action.payload);
		},
		removeFromFavourites: (state, action) => {
			const index = state.favourites.indexOf(action.payload);
			state.favourites.splice(index, 1);
		},
	},
});

export const {
	setCoinsList,
	addToFavourites,
	removeFromFavourites,
} = coinsListSlice.actions;

export const fetchCoins = () => async (dispatch) => {
	let coinList = await cc.coinList();
	dispatch(setCoinsList(coinList.Data));
};

export const selectAggregatedListingData = (state) => {
	let aggregatedList = [];

	if (state.coinsList.coinsList.length) {
		aggregatedList = state.coinsList.coinsList.map((el) => {
			return {
				CoinName: el.CoinName,
				symbol: el.Symbol,
				ImageUrl: el.ImageUrl,
			};
		});
	}

	aggregatedList.sort(sortByKeyValue);
	return aggregatedList.slice(220);
};

export const selectFavourites = (state) => {
	let aggregatedFavourites = [];
	if (state.coinsList.coinsList.length) {
		aggregatedFavourites = state.coinsList.favourites.map((el) => {
			const index = state.coinsList.coinsList.findIndex(
				(t) => t.Symbol === el
			);
			return state.coinsList.coinsList[index];
		});

		aggregatedFavourites = aggregatedFavourites.map((el) => {
			return {
				CoinName: el.CoinName,
				symbol: el.Symbol,
				ImageUrl: el.ImageUrl,
			};
		});

		aggregatedFavourites.sort(sortByKeyValue);
	}
	return aggregatedFavourites;
};

export default coinsListSlice.reducer;
