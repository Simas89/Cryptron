import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimeFrame } from 'redux/slices/appSlice';
import { Box } from '@material-ui/core';
import styled, { css } from 'styled-components';

const colorPrimary = css`
	${(p) => p.theme.palette.primary.main};
`;

const Div = styled.div`
	margin-right: 10px;
	opacity: 0.5;

	&:hover {
		cursor: pointer;
	}

	${(p) =>
		p.current &&
		css`
			border-bottom: 2px solid ${colorPrimary};
			opacity: 1;
			pointer-events: none;
		`}
`;

const TimeFrameButton = ({ timeframe }) => {
	const dispatch = useDispatch();
	const timeFrame = useSelector((state) => state.app.timeFrame);

	const handleClick = () => {
		dispatch(setTimeFrame(timeframe));
	};

	return (
		<Div
			current={timeFrame === timeframe.toLowerCase()}
			onClick={handleClick}
		>
			{timeframe}
		</Div>
	);
};

const timeframes = ['Months', 'Weeks', 'Days'];

const ChartSelect = () => {
	return (
		<Box zIndex={2} display="flex">
			{timeframes.map((timeframe) => (
				<TimeFrameButton key={timeframe} timeframe={timeframe} />
			))}
		</Box>
	);
};

export default ChartSelect;
