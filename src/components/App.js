import React from 'react';
import styled from 'styled-components';
import Screen from 'components/Screen';
import NavBar from 'components/NavBar';
import { Container } from '@material-ui/core';

const StyledContainer = styled(Container)``;

function App() {
	return (
		<StyledContainer>
			<NavBar />
			<Screen />
		</StyledContainer>
	);
}

export default App;
