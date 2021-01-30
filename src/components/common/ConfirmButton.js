import React from 'react';
import { useDispatch } from 'react-redux';
import { confirmFavourites } from 'redux/slices/appSlice';
import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

const TheButton = styled(Box)`
	border: 1px solid #fed128;
	padding: 10px 16px;
	color: #fed128;
	&:hover {
		cursor: pointer;
	}
`;

export const ConfirmButton = () => {
	const dispatch = useDispatch();
	const clickHandler = () => {
		dispatch(confirmFavourites());
	};
	return (
		<Box display="flex" justifyContent="center">
			<TheButton onClick={clickHandler}>
				<Typography variant="body1">Confirm Favourites</Typography>
			</TheButton>{' '}
		</Box>
	);
};
