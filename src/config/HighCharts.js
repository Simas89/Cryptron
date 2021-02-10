export const chartConfig = (historicalPrices) => {
	return {
		title: {
			text: '',
		},

		yAxis: {
			title: {
				text: 'Price',
			},
		},

		xAxis: {
			accessibility: {
				rangeDescription: 'Range: 2010 to 2017',
			},
		},
		xAxis: {
			type: 'datetime',
		},

		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
		},

		plotOptions: {
			series: {
				label: {
					connectorAllowed: false,
				},
				pointStart: 2010,
			},
		},

		series: historicalPrices,

		responsive: {
			rules: [
				{
					condition: {
						maxWidth: '100%',
					},
					chartOptions: {
						legend: {
							layout: 'horizontal',
							align: 'center',
							verticalAlign: 'bottom',
						},
					},
				},
			],
		},
	};
};
