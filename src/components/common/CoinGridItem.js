import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from 'redux/slices/appSlice';
import styled, { css } from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import { CoinImage, CoinRemoveLayer } from 'components/common';

const Div = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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

export const CoinGridItem = ({ element, topSection }) => {
	const dispatch = useDispatch();
	const isFavoured = useSelector((state) =>
		state.app.favourites.includes(element.symbol)
	);
	// const isFavoured = false;

	const clickHandler = () => {
		if (topSection) {
			dispatch(removeFromFavourites(element.symbol));
		} else {
			if (!isFavoured) {
				dispatch(addToFavourites(element.symbol));
			} else {
				dispatch(removeFromFavourites(element.symbol));
			}
		}
	};

	return (
		<Div
			onClick={clickHandler}
			topSection={topSection}
			isFavoured={isFavoured}
		>
			{topSection && <CoinRemoveLayer />}
			<Typography variant="body1">{element.symbol}</Typography>

			<CoinImage element={element} />
			<Box maxWidth="100%">
				<Typography variant="body2" noWrap>
					{element.CoinName}
				</Typography>
			</Box>
		</Div>
	);
};

CoinGridItem.propTypes = {
	element: PropTypes.exact({
		CoinName: PropTypes.string.isRequired,
		symbol: PropTypes.string.isRequired,
		ImageUrl: PropTypes.string.isRequired,
	}),
	topSection: PropTypes.bool,
};
