import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import PriceGridItem from 'components/PriceGridItem';

const PriceGrid = () => {
	const prices = useSelector((state) => state.app.prices);
	return (
		<Grid container spacing={1}>
			{prices.map((el) => (
				<PriceGridItem key={Object.keys(el)[0]} price={el} />
			))}
		</Grid>
	);
};

export default PriceGrid;
