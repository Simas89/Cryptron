import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHistorical } from 'redux/slices/appSlice';
import styled from 'styled-components';
import { Loader } from 'components/common';
import ReactHighCharts from 'react-highcharts';
import { chartConfig, highChartsTheme } from 'config';
ReactHighCharts.Highcharts.setOptions(highChartsTheme);

const Div = styled.div`
	position: relative;
	width: calc(100% - 230px);
	backdrop-filter: blur(4px);
	${(p) => p.theme.breakpoints.down('sm')} {
		width: 100%;
	}
`;

const PriceChart = () => {
	const dispatch = useDispatch();
	const historicalPrices = useSelector((state) => state.app.historicalPrices);
	const spotlightFavourite = useSelector(
		(state) => state.app.spotlightFavourite
	);
	const timeFrame = useSelector((state) => state.app.timeFrame);

	React.useEffect(() => {
		dispatch(fetchHistorical());
	}, [spotlightFavourite, timeFrame, dispatch]);

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
