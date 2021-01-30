import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from 'redux/slices/appSlice';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledControlButton = styled.div`
	cursor: pointer;
	.MuiTypography-root {
		${(p) =>
			p.active &&
			css`
				text-shadow: 0 0 1vw #fa1c16, 0 0 3vw #fa1c16, 0 0 10vw #fa1c16;
				color: #fed128;
			`}
	}
`;

export const ControlButton = ({ name }) => {
	const dispatch = useDispatch();
	const page = useSelector((state) => state.app.page);

	const clickHandler = () => {
		dispatch(setPage(name));
	};
	return (
		<StyledControlButton active={page === name} onClick={clickHandler}>
			<Typography variant="button">{name}</Typography>
		</StyledControlButton>
	);
};

ControlButton.propTypes = {
	name: PropTypes.string,
};
