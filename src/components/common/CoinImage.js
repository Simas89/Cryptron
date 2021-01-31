import React from 'react';

export const CoinImage = ({ element, style }) => {
	return (
		<img
			alt={element.symbol}
			style={style || { height: '50px' }}
			src={`http://cryptocompare.com/${element.ImageUrl}`}
		/>
	);
};
