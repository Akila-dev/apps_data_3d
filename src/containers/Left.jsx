/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Text } from '@react-three/drei';

import { Image, Sphere, Fog } from '../components';
import fontUrl from '../assets/fonts/Lato-Bold.ttf';
import tubes from '../assets/tube.png';
import grayPoint from '../assets/point-circle.png';
import activePoint from '../assets/active-point.png';

const Left = ({ leftText }) => {
	// eslint-disable-next-line no-unused-vars
	const [activeNav, setActiveNav] = useState(4);
	const positions = [2, 1, 0, -1, -2, -3, -4];
	return (
		<group>
			{leftText.map((text, i) => (
				<mesh key={i}>
					<Text
						scale={0.025}
						position={[0, (positions[i] - 0.2) / 18.5, 0]}
						font={fontUrl}
						anchorX="right"
					>
						{text}
					</Text>
					<Image
						url={activeNav === i ? activePoint : grayPoint}
						scale={0.03}
						position={[0.03, (positions[i] - 0.2) / 18.5, 0.01]}
						// opacity={0.4}
					/>
				</mesh>
			))}
			<Image
				url={tubes}
				scale={0.4}
				position={[0.22, -0.097, 0]}
				opacity={0.4}
			/>
			<mesh position={[0.21, -0.36, 0.01]}>
				<Fog scale={[0.23, 0.23]} top={0} />
				<Sphere
					position={[0, 0, 0]}
					labelPosition={[0, -1.3, 0]}
					textRotation={0}
					text={'SHADOW CLOUD'}
				/>
			</mesh>
		</group>
	);
};

export default Left;
