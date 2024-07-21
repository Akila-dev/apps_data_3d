/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Text, Image as Dots } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

import { Image, Sphere, Fog } from '../components';
import fontUrl from '../assets/fonts/Lato-Bold.ttf';
import tubes from '../assets/tube.png';
import grayPoint from '../assets/point-circle.png';
import activePoint from '../assets/active-point.png';

const Left = ({
	leftText,
	activeSphere,
	setActiveSphere,
	dataLength,
	sphereData,
	setActiveData,
}) => {
	// eslint-disable-next-line no-unused-vars
	const [activeNav, setActiveNav] = useState(4);
	const positions = [2, 1, 0, -1, -2, -3, -4];

	const pointerOver = () => {
		// setHovering(true);
		setActiveSphere(dataLength - 1);
	};
	const pointerOut = () => {
		// setHovering(false);
		setActiveSphere(-1);
	};
	return (
		<group>
			{leftText.map((text, i) => (
				<mesh key={i}>
					<Text
						scale={0.025}
						position={[0, (positions[i] - 0.2) / 18.5, 0.1]}
						font={fontUrl}
						anchorX="right"
						color={activeSphere === -1 ? 0xffffff : 0x333333}
					>
						{text}
					</Text>
					<Dots
						url={activeNav === i ? activePoint : grayPoint}
						scale={[0.03, 0.03]}
						position={[0.03, (positions[i] - 0.2) / 18.5, 0.01]}
						transparent
						// opacity={activeSphere === -1 ? 1 : 0.1}

						// opacity={0.4}
					/>
				</mesh>
			))}
			<Image
				url={tubes}
				scale={0.4}
				position={[0.22, -0.097, 0]}
				// opacity={0.4}
				opacity={activeSphere === -1 ? 0.5 : 0.1}
				roughness={0}
			/>
			<motion.pointLight
				// initial={{ scale: 0 }}
				animate={{ x: [-0.5, 2] }}
				transition={{
					duration: 5,
					repeat: Infinity,
					type: 'tween',
					stiffness: 100,
				}}
				color={0xaaaaaa}
				intensity={0.2}
				position={[0, -0.097, 0.1]}
				// position={[0.22, -0.097, 0.1]}

				// position={[0, (positions[i] - 0.2) / 18.5, 0.1]}
			/>
			<motion.pointLight
				// initial={{ scale: 0 }}
				animate={{ x: [-0.5, 2] }}
				transition={{
					duration: 5,
					repeat: Infinity,
					type: 'tween',
					stiffness: 100,
				}}
				color={0xaaaaaa}
				intensity={0.2}
				position={[0, 0.097, 0.1]}
				// position={[0.22, -0.097, 0.1]}

				// position={[0, (positions[i] - 0.2) / 18.5, 0.1]}
			/>
			<mesh
				onClick={() => setActiveData(dataLength - 1)}
				position={[0.21, -0.36, 0.01]}
			>
				<Fog scale={[0.23, 0.23]} top={0} />
				<Sphere
					position={[0, 0, 0]}
					labelPosition={[0, -1.3, 0]}
					textRotation={0}
					text={'SHADOW CLOUD'}
					active={
						activeSphere === dataLength - 1
							? true
							: activeSphere === -1
							? true
							: false
					}
					red={sphereData[dataLength - 1].red}
					blue={sphereData[dataLength - 1].blue}
					gray={sphereData[dataLength - 1].gray}
					onPointerOver={pointerOver}
					onPointerOut={pointerOut}
				/>
			</mesh>
		</group>
	);
};

export default Left;
