import { createSlice } from '@reduxjs/toolkit';
const cc = require('cryptocompare');
cc.setApiKey(process.env.REACT_APP_CRYPTOCOMPARE);

export const coinsListSlice = createSlice({
	name: 'coinsList',
	initialState: {},
	reducers: {
		setCoinList: (state, action) => {
			state.coinList = action.payload;
		},
	},
});

export const { setCoinList } = coinsListSlice.actions;

export const fetchCoins = () => async (dispatch) => {
	let coinList = await cc.coinList();
	dispatch(setCoinList(coinList.Data));
};

export default coinsListSlice.reducer;
