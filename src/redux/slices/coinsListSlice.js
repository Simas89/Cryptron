import { createSlice } from '@reduxjs/toolkit';
import { sortByKeyValue, filterTopListedCoins } from 'utils';
import cc from 'cryptocompare';
cc.setApiKey(process.env.REACT_APP_CRYPTOCOMPARE);

export const coinsListSlice = createSlice({
	name: 'coinsList',
	initialState: { coinsList: [], searchFilter: '' },
	reducers: {
		setCoinsList: (state, action) => {
			state.coinsList = filterTopListedCoins(action.payload);
		},
		setSearchFilter: (state, action) => {
			state.searchFilter = action.payload;
		},
	},
});

export const { setCoinsList, setSearchFilter } = coinsListSlice.actions;

export const fetchCoins = () => async (dispatch) => {
	let coinList = await cc.coinList();
	dispatch(setCoinsList(coinList.Data));
};

export const selectAggregatedListingData = (state) => {
	const keyword = state.coinsList.searchFilter.toLowerCase();
	let aggregatedList = [];

	if (state.coinsList.coinsList.length) {
		aggregatedList = state.coinsList.coinsList
			.filter((el) => {
				return (
					el.CoinName.toLowerCase().includes(keyword) ||
					el.Symbol.toLowerCase().includes(keyword)
				);
			})
			.map((el) => {
				return {
					CoinName: el.CoinName,
					symbol: el.Symbol,
					ImageUrl: el.ImageUrl,
				};
			})
			.sort(sortByKeyValue);
	}
	return aggregatedList;
};

export const selectFavourites = (state) => {
	let aggregatedFavourites = [];
	if (state.coinsList.coinsList.length) {
		aggregatedFavourites = state.app.favourites.map((el) => {
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
