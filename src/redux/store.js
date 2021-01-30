import { configureStore } from '@reduxjs/toolkit';
import appSlice from 'redux/slices/appSlice';
import coinsListSlice from 'redux/slices/coinsListSlice';

export default configureStore({
	reducer: {
		app: appSlice,
		coinsList: coinsListSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
			// immutableCheck: { ignoredPaths: ['coinsList'] },
			// serializableCheck: { ignoredPaths: ['coinsList'], warnAfter: 500 },
		}),
});
