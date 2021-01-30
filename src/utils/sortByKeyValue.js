export const sortByKeyValue = (a, b) => {
	if (a.symbol < b.symbol) {
		return -1;
	}
	if (a.symbol > b.symbol) {
		return 1;
	}
	return 0;
};
