/* eslint-disable react/no-unknown-property */

// import React from 'react';
import { motion } from 'framer-motion-3d';
import { Sphere as SphereMesh, useTexture, Text } from '@react-three/drei';

import img from '../assets/earthcloudmap.jpg';
import fontUrl from '../assets/fonts/Lato-Bold.ttf';

// eslint-disable-next-line react/prop-types
const Sphere = ({ position, labelPosition, textRotation, text }) => {
	const texture = useTexture(img);
	return (
		<motion.mesh
			transition={{ type: 'spring', stiffness: 700, damping: 35 }}
			animate={{ scale: [0, 0.1] }}
		>
			<SphereMesh position={position}>
				<meshStandardMaterial map={texture} />
				<Text
					color="white"
					font={fontUrl}
					scale={0.2}
					position={labelPosition}
					rotation={[0, 0, textRotation]}
				>
					{text}
				</Text>
			</SphereMesh>
		</motion.mesh>
	);
};

export default Sphere;
