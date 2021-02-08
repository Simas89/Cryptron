import React from 'react';
import { useSelector } from 'react-redux';
import { CoinImage } from 'components/common';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Div = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 8px;
	background-color: rgb(6, 26, 68);

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

	return coin ? (
		<Div>
			<Typography className="header" variant="h5">
				{coin && coin.CoinName}
			</Typography>
			<CoinImage
				element={coin}
				style={{ height: '200px', margin: 'auto' }}
			/>
		</Div>
	) : null;
};

export default CoinSpotLight;
