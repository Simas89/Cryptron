import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

export const WelcomeHeader = () => {
	const firstVisit = useSelector((state) => state.app.firstVisit);
	return (
		<Typography variant="h5">
			{firstVisit
				? 'Welcome to Cryptron, please select your favourite coins to begin.'
				: null}
		</Typography>
	);
};
