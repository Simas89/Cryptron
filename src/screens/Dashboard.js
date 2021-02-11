import React from 'react';
import styled from 'styled-components';
import PriceGrid from 'components/PriceGrid';
import CoinSpotLight from 'components/CoinSpotLight';
import PriceChart from 'components/PriceChart';
import ChartSelect from 'components/ChartSelect';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(p) => p.theme.spacing(2)}px;

	.contents {
		position: relative;
		display: flex;
		${(p) => p.theme.breakpoints.down('sm')} {
			flex-direction: column;
		}

		gap: ${(p) => p.theme.spacing(2)}px;
		align-items: stretch;
		justify-content: stretch;
	}
`;

const Dashboard = () => {
	return (
		<Div>
			<PriceGrid />
			<ChartSelect />

			<div className="contents">
				<PriceChart />
				<CoinSpotLight />
			</div>
		</Div>
	);
};

export default Dashboard;
