import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { TooltipCustom } from 'components/common';

const StyledGrid = styled(Grid)`
	padding: 4px 0;
	&:hover {
		cursor: pointer;
	}
`;

export const CoinGridItem = React.memo(({ element }) => {
	return (
		<TooltipCustom items={element.CoinName}>
			<StyledGrid item xs={2} md={1}>
				{element.symbol}
			</StyledGrid>
		</TooltipCustom>
	);
});
