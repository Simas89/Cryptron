import React from 'react';
import styled from 'styled-components';
import Contents from 'components/Contents';
import NavBar from 'components/NavBar';
import { Container } from '@material-ui/core';

const StyledContainer = styled(Container)``;

function App() {
	return (
		<StyledContainer>
			<NavBar />
			<Contents />
		</StyledContainer>
	);
}

export default App;
