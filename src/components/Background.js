import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Particles from 'react-particles-js';

const Wrapper = styled.div`
	position: fixed;
	left: 0;
	height: 100%;
	width: 100vw;
	background: radial-gradient(
		${(p) => p.theme.palette.secondary.light},
		${(p) => p.theme.palette.secondary.main}
	);

	.particles {
		position: absolute;
		width: 100%;
		height: 100%;
	}
`;

const Background = () => {
	const md = useMediaQuery((theme) => theme.breakpoints.up('md'));
	const lg = useMediaQuery((theme) => theme.breakpoints.up('lg'));
	return (
		<Wrapper>
			<Particles
				className="particles"
				params={{
					particles: {
						number: {
							value: `${lg ? 70 : md ? 50 : 30}`,
						},
						size: {
							value: 2,
						},
					},
				}}
			/>
		</Wrapper>
	);
};

export default Background;
