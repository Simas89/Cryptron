import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from 'redux/slices/coinsListSlice';
import SettingsScreen from 'screens/SettingsScreen';
import MainScreen from 'screens/MainScreen';

const Screen = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchCoins());
	}, [dispatch]);

	const page = useSelector((state) => state.app.page);
	return (
		<div>{page === 'settings' ? <SettingsScreen /> : <MainScreen />}</div>
	);
};

export default Screen;
