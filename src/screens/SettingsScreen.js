import React from 'react';
import { WelcomeHeader, ConfirmButton } from 'components/common';
import CoinGrid from 'components/CoinGrid';
import SearchInput from 'components/SearchInput';

const SettingsScreen = () => {
	return (
		<>
			<WelcomeHeader />
			<CoinGrid topSection />
			<ConfirmButton />
			<SearchInput />
			<CoinGrid />
		</>
	);
};

export default SettingsScreen;
