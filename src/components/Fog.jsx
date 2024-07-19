/* eslint-disable react/prop-types */
// import React from 'react';
import { Image } from '@react-three/drei';
import fog from '../assets/fog.png';

const Fog = ({ scale, top }) => {
	return (
		<mesh>
			{/* <Image
				url={fog}
				scale={scale ? scale : 0.8}
				position={[0, top ? top : 0, 0]}
				// opacity={0.4}
			/> */}
			<Image
				url={fog}
				scale={scale ? scale : [0.8, 0.8]}
				transparent
				position={[0, top ? top : 0, -0.1]}
			/>
		</mesh>
	);
};

export default Fog;
