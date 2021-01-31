import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CloseIcon from '@material-ui/icons/Close';

const Div = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0);

	.motion {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.MuiSvgIcon-root {
			font-size: 5rem;
			/* color: red; */
		}
	}
`;

const MotionDiv = motion.custom(Div);

export const CoinRemoveLayer = () => {
	const [isHovered, setHovered] = React.useState(false);
	const variants = {
		animateHoverMain: {
			backgroundColor: 'rgba(0, 0, 0, 0.7)',
			transition: {
				type: 'tween',
				duration: 0.1,
			},
		},
		animateHoverIcon: {
			opacity: 1,
			transition: {
				type: 'tween',
				duration: 0.1,
			},
		},
		animateHoverIconEnd: {
			opacity: 0,
			transition: {
				type: 'tween',
				duration: 0.1,
			},
		},
	};
	return (
		<MotionDiv variants={variants} whileHover={'animateHoverMain'}>
			<motion.div
				className="motion"
				variants={variants}
				initial={{ opacity: 0 }}
				animate={isHovered ? 'animateHoverIcon' : 'animateHoverIconEnd'}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<CloseIcon />
			</motion.div>
		</MotionDiv>
	);
};
