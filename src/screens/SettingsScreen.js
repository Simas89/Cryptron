import React from 'react';
import { WelcomeHeader, ConfirmButton } from 'components/common';
import CoinGrid from 'components/CoinGrid';

const SettingsScreen = () => {
	return (
		<>
			<WelcomeHeader />
			<ConfirmButton />
			<CoinGrid />
		</>
	);
};

export default SettingsScreen;
