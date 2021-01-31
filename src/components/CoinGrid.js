import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import {
	selectAggregatedListingData,
	selectFavourites,
} from 'redux/slices/coinsListSlice';
import { CoinGridItem } from 'components/common';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const StyledGrid = styled(Grid)`
	margin: 20px 0;
`;

const CoinGrid = ({ topSection }) => {
	const listingData = useSelector(
		topSection ? selectFavourites : selectAggregatedListingData,
		shallowEqual
	);

	return (
		<StyledGrid container spacing={1}>
			{listingData.map((el, i) => (
				<Grid item xs={3} md={2} key={'key' + i}>
					<CoinGridItem element={el} topSection={topSection} />
				</Grid>
			))}
		</StyledGrid>
	);
};

export default CoinGrid;
