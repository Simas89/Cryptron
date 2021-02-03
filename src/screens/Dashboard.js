import React from 'react';
import PriceGrid from 'components/PriceGrid';
import CoinSpotLight from 'components/CoinSpotLight';
import { Box, Grid } from '@material-ui/core';

const Dashboard = () => {
	return (
		<>
			<PriceGrid />
			<Box height={20} />
			<Grid container spacing={2}>
				<Grid item xs="auto">
					<CoinSpotLight />
				</Grid>
				<Grid item xs="auto">
					lalal
				</Grid>
			</Grid>
		</>
	);
};

export default Dashboard;
