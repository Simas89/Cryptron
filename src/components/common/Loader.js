import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import theme from 'theme';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrap = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Loader = () => {
	return (
		<Wrap>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<ScaleLoader
					height="60px"
					width="4px"
					margin="3px"
					color={theme.palette.orange}
					loading={true}
				/>
			</motion.div>
		</Wrap>
	);
};
