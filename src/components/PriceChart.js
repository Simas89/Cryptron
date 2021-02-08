import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import ReactHighCharts from 'react-highcharts';
import { chartConfig, highChartsTheme } from 'config';
ReactHighCharts.Highcharts.setOptions(highChartsTheme);

const Div = styled.div`
	background-color: rgb(6, 26, 68);
	/* width: calc(100% - ${(p) => p.theme.spacing(1)}px); */
	width: 100%;

	&:hover {
		cursor: pointer;
		background-color: rgb(36, 58, 91);
	}
`;

const PriceChart = () => {
	// document.getElementById('reflow-chart').addEventListener('click', () => {
	// 	chartConfig().reflow();
	// });
	return (
		<Div>
			<ReactHighCharts config={chartConfig()} />
		</Div>
	);
};

export default PriceChart;
