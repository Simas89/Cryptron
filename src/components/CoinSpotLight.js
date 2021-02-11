import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import { CoinImage } from 'components/common';
import styled from 'styled-components';
import { Typography, useMediaQuery } from '@material-ui/core';

const Div = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 8px;
	backdrop-filter: blur(4px);
	border: 1px solid rgba(255, 255, 255, 0.2);

	pointer-events: none;

	.header {
		width: 100%;
		text-align: center;
		margin-bottom: 10px;
	}
`;

const CoinSpotLight = () => {
	const currentCoin = useSelector((state) =>
		state.coinsList.coinsList.filter((el) => {
			return el.Symbol === state.app.spotlightFavourite;
		})
	);
	const coin = currentCoin[0];

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return coin ? (
		<Div>
			<Typography className="header" variant={smDown ? 'h6' : 'h5'}>
				{coin && coin.CoinName}
			</Typography>
			<CoinImage
				element={coin}
				style={{ height: smDown ? '100px' : '200px', margin: 'auto' }}
			/>
		</Div>
	) : null;
};

export default CoinSpotLight;
