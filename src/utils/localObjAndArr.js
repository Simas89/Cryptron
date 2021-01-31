export const filterTopListedCoins = (obj) => {
	let topCoins = [];
	//eslint-disable-next-line
	for (const [key, value] of Object.entries(obj)) {
		if (value.SortOrder <= 300) {
			topCoins.push(value);
		}
	}
	return topCoins;
};

export const filterObjToArr = (arr, obj) => {
	const selected = [];
	for (let i = 0; i < arr.length; i++) {
		if (obj[arr[i]]) {
			selected.push(obj[arr[i]]);
		}
	}
	return selected;
};

export const sortByKeyValue = (a, b) => {
	if (a.symbol < b.symbol) {
		return -1;
	}
	if (a.symbol > b.symbol) {
		return 1;
	}
	return 0;
};
