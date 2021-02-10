import React from 'react';

import styled from 'styled-components';
import PriceGrid from 'components/PriceGrid';
import CoinSpotLight from 'components/CoinSpotLight';
import PriceChart from 'components/PriceChart';
import { Box, Grid } from '@material-ui/core';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(p) => p.theme.spacing(2)}px;

	.contents {
		position: relative;
		/* display: grid;
		grid-template-columns: auto auto;
		gap: ${(p) => p.theme.spacing(2)}px; */
		display: flex;
		gap: ${(p) => p.theme.spacing(2)}px;
		align-items: stretch;
		justify-content: stretch;
	}
`;

const Dashboard = () => {
	return (
		<Div>
			<PriceGrid />

			<div className="contents">
				<CoinSpotLight />

				<PriceChart />
			</div>
		</Div>
	);
};

export default Dashboard;
