export const filterObjToArr = (arr, obj) => {
	const selected = [];
	for (let i = 0; i < arr.length; i++) {
		if (obj[arr[i]]) {
			selected.push(obj[arr[i]]);
		}
	}
	return selected;
};
