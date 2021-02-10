import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHistorical } from 'redux/slices/appSlice';
import styled, { css } from 'styled-components';
import { Loader } from 'components/common';
import ReactHighCharts from 'react-highcharts';
import { chartConfig, highChartsTheme } from 'config';
ReactHighCharts.Highcharts.setOptions(highChartsTheme);

const Div = styled.div`
	position: relative;
	background-color: rgb(6, 26, 68);
	/* width: calc(100% - ${(p) => p.theme.spacing(1)}px); */
	width: calc(100% - 230px);

	&:hover {
		cursor: pointer;
		background-color: rgb(36, 58, 91);
	}
`;

const PriceChart = () => {
	const dispatch = useDispatch();
	const historicalPrices = useSelector((state) => state.app.historicalPrices);
	const spotlightFavourite = useSelector(
		(state) => state.app.spotlightFavourite
	);

	React.useEffect(() => {
		dispatch(fetchHistorical());
	}, [spotlightFavourite]);

	console.log(historicalPrices);
	return (
		<>
			<Div>
				<ReactHighCharts config={chartConfig(historicalPrices)} />

				{historicalPrices === null && <Loader />}
			</Div>
		</>
	);
};

export default PriceChart;
