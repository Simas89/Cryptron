import React from 'react';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchCoins } from 'redux/slices/coinsListSlice';
import SettingsScreen from 'screens/SettingsScreen';
import MainScreen from 'screens/MainScreen';

const Contents = () => {
	const dispatch = useDispatch();
	const page = useSelector((state) => state.app.page, shallowEqual);

	React.useEffect(() => {
		dispatch(fetchCoins());
	}, [dispatch]);

	return (
		<div>{page === 'settings' ? <SettingsScreen /> : <MainScreen />}</div>
	);
};

export default Contents;
