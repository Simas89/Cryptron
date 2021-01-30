import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import { ControlButton } from 'components/common';

const StyledAppBar = styled.div`
	position: relative;
	background: none;
	height: 60px;
	display: flex;
	align-items: center;
	/* border: 1px solid white; */
	.MuiGrid-root {
		flex-grow: 1;
		/* border: 1px solid red; */
	}
`;

const Logo = () => {
	return <Typography variant="button">Cryptron</Typography>;
};

const NavBar = () => {
	return (
		<StyledAppBar>
			<Grid container spacing={2}>
				<Grid item xs={1} align="center">
					<Logo />
				</Grid>
				<Grid item xs="auto"></Grid>
				<Grid item xs={1} align="center">
					<ControlButton name="dashboard" />
				</Grid>
				<Grid item xs={1} align="center">
					<ControlButton name="settings" />
				</Grid>
			</Grid>
		</StyledAppBar>
	);
};

export default NavBar;
