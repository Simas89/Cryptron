import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		secondary: {
			main: 'rgb(6, 26, 68)',
		},
		orange: '#fed128',
		primary: { main: '#fed128' },
	},
	typography: {
		// fontFamily: `"Do Hyeon", "Roboto", "Helvetica", "Arial", sans-serif`,
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: '#010e2c',
					color: 'white',
				},
			},
		},
		MuiListPadding: {
			padding: 0,
		},
	},
});

export default theme;
