import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
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
	},
});

export default theme;
