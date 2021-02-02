import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchCoins } from 'redux/slices/coinsListSlice';
import { fetchPrices } from 'redux/slices/appSlice';
import SettingsScreen from 'screens/SettingsScreen';
import Dashboard from 'screens/Dashboard';

const Contents = () => {
	const dispatch = useDispatch();
	const page = useSelector((state) => state.app.page, shallowEqual);

	React.useEffect(() => {
		dispatch(fetchCoins());
		dispatch(fetchPrices());
	}, [dispatch]);

	return <div>{page === 'settings' ? <SettingsScreen /> : <Dashboard />}</div>;
};

export default Contents;
