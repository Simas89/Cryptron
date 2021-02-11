import React from 'react';
import styled from 'styled-components';
import Background from 'components/Background';
import Contents from 'components/Contents';
import NavBar from 'components/NavBar';
import { Container } from '@material-ui/core';

const StyledContainer = styled(Container)`
	/* position: relative; */
	padding-bottom: 20px;
`;

function App() {
	return (
		<>
			<StyledContainer>
				<Background />
				<NavBar />
				<Contents />
			</StyledContainer>
		</>
	);
}

export default App;
