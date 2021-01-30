import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

import styled from 'styled-components';

const HtmlTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: '#f5f5f9',
		// backgroundColor: '#f5f5f9',
		color: 'rgba(0, 0, 0, 0.87)',
		// maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: '1px solid #dadde9',
		borderRadius: 0,
		marginBottom: '8px',
	},
	arrow: {
		color: '#f5f5f9',
	},
}))(Tooltip);

const Contents = styled.div`
	display: flex;
	flex-direction: column;

	.MuiButton-root {
		text-transform: none; /*For Lower case use lowercase*/
	}
`;

export const TooltipCustom = ({ children, items }) => {
	return (
		<HtmlTooltip
			placement="top"
			interactive
			arrow
			title={<Contents>{items}</Contents>}
		>
			{children}
		</HtmlTooltip>
	);
};
