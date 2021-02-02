import React from 'react';
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
		p.isFavoured &&
		!p.topSection &&
		css`
			background-color: rgb(36, 58, 91);
		`}
`;

const ChangePct = styled.div`
	color: ${(p) => (p.red ? 'red' : 'green')};
`;

const numberFormat = (number) => {
	return String(number).slice(0, 7);
};

const PriceGridItem = ({ price, index }) => {
	const sym = Object.keys(price)[0];
	const data = price[sym]['USD'];
	return (
		<Grid item xs={3} md={2}>
			<Div>
				<Box width="100%" display="flex" justifyContent="space-between">
					<Typography noWrap variant="body2">
						{sym}
					</Typography>
					<ChangePct red={data.CHANGEPCT24HOUR < 0}>
						<Typography noWrap variant="body2">
							<b>{data.CHANGEPCT24HOUR.toFixed(2)}</b>
						</Typography>
					</ChangePct>
				</Box>

				<Typography noWrap variant="h5">
					£{numberFormat(data.PRICE)}
				</Typography>
			</Div>
		</Grid>
	);
};

export default PriceGridItem;
