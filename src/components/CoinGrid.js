import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { selectAggregatedListingData } from 'redux/slices/coinsListSlice';
import { CoinGridItem } from 'components/common';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const StyledGrid = styled(Grid)`
	border: 1px solid white;
`;

const CoinGrid = () => {
	const listingData = useSelector(selectAggregatedListingData, shallowEqual);
	console.log(listingData);

	return (
		<StyledGrid container>
			{listingData.map((el, i) => (
				<CoinGridItem element={el} key={'key' + i} />
			))}
		</StyledGrid>
	);
};

export default CoinGrid;
