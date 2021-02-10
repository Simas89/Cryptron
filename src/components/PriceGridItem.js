import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSpotlightFavourite } from 'redux/slices/appSlice';
import styled, { css } from 'styled-components';
import { Box, Grid, Typography } from '@material-ui/core';

const Div = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 8px;
	background-color: rgb(6, 26, 68);

	&:hover {
		cursor: pointer;
		${(p) =>
			!p.topSection &&
			css`
				background-color: rgb(36, 58, 91);
			`}
	}
	${(p) =>
		p.isSpotlightFavourite &&
		css`
			background-color: rgba(0, 0, 0, 0);
			border: 1px solid rgba(255, 255, 255, 0.2);
			backdrop-filter: blur(4px);
			pointer-events: none;
		`}
`;

const ChangePct = styled.div`
	color: ${(p) => (p.red ? 'red' : 'green')};
`;

const numberFormat = (number) => {
	return String(number).slice(0, 7);
};

const PriceGridItem = ({ price }) => {
	const sym = Object.keys(price)[0];
	const isSpotlightFavourite = useSelector(
		(state) => state.app.spotlightFavourite === sym
	);
	const dispatch = useDispatch();
	const data = price[sym]['USD'];

	const clickHandler = () => {
		dispatch(setSpotlightFavourite(sym));
	};
	return (
		<Grid item xs={3} md={2} onClick={clickHandler}>
			<Div isSpotlightFavourite={isSpotlightFavourite}>
				<Box width="100%" display="flex" justifyContent="space-between">
					<Typography noWrap variant="body2">
						{sym}
					</Typography>
					<ChangePct red={data.CHANGEPCT24HOUR < 0}>
						<Typography noWrap variant="body2">
							<b>
								%
								{data.CHANGEPCT24HOUR
									? data.CHANGEPCT24HOUR.toFixed(2)
									: null}
							</b>
						</Typography>
					</ChangePct>
				</Box>

				<Typography noWrap variant="h5">
					{data.PRICE ? `£${numberFormat(data.PRICE)}` : 'error'}
				</Typography>
			</Div>
		</Grid>
	);
};

export default PriceGridItem;
