export const savedSettings = () => {
	let cryptronData = JSON.parse(localStorage.getItem('cryptron'));
	if (!cryptronData) {
		return { page: 'settings', firstVisit: true };
	} else {
		return {};
	}
};
