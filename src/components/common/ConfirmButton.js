import React from 'react';
import { useDispatch } from 'react-redux';
import { saveSettingsLocalStorage, fetchPrices } from 'redux/slices/appSlice';
import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

const TheButton = styled(Box)`
	border: 1px solid ${(p) => p.theme.palette.orange};
	padding: 10px 16px;
	color: ${(p) => p.theme.palette.orange};
	z-index: 1;
	margin-bottom: 25px;
	&:hover {
		cursor: pointer;
	}
`;

export const ConfirmButton = () => {
	const dispatch = useDispatch();
	const clickHandler = () => {
		dispatch(saveSettingsLocalStorage());
		dispatch(fetchPrices());
	};
	return (
		<Box display="flex" justifyContent="center">
			<TheButton onClick={clickHandler}>
				<Typography variant="body1">Confirm Favourites</Typography>
			</TheButton>{' '}
		</Box>
	);
};
