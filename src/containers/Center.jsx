/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';
import { Text } from '@react-three/drei';
import { Sphere, Fog } from '../components';
import { Image } from '../components';
import logos from '../assets/apps-logo.png';
import fontUrl from '../assets/fonts/Lato-Bold.ttf';

const Center = ({
	sphereText,
	allApps,
	activeSphere,
	setActiveSphere,
	sphereData,
}) => {
	// const [activeSphere, setActiveSphere] = useState(-1);
	const val = 0.35 * Math.PI;
	const radius = 2.6;
	const textRotations = [-0.45, 0.45, 1.25, -0.8, 0, 1, -1.35];

	// const pointerOver = (i) => setActiveSphere(i);
	// const pointerOut = () => setActiveSphere(100);

	const pointerOver = (i) => {
		// setHovering(true);
		setActiveSphere(i);
	};
	const pointerOut = () => {
		// setHovering(false);
		setActiveSphere(-1);
	};

	// useEffect(() => {
	// 	console.log(activeSphere);
	// }, [activeSphere]);

	return (
		<group>
			<Fog scale={[0.9, 0.9]} top={0.1} />

			{sphereText.map((text, i) => (
				<mesh
					key={i}
					// onPointerOver={() => pointerOver(i)}
					// onPointerOut={pointerOut}
					// position={[
					// 	Math.cos(val + Math.PI * 0.286 * i) * radius,
					// 	Math.sin(val + Math.PI * 0.286 * i) * radius,
					// 	0,
					// ]}
				>
					<Sphere
						position={[
							Math.cos(val + Math.PI * 0.286 * i) * radius,
							Math.sin(val + Math.PI * 0.286 * i) * radius,
							0,
						]}
						labelPosition={[
							(Math.cos(val + Math.PI * 0.286 * i) * radius) / 2,
							(Math.sin(val + Math.PI * 0.286 * i) * radius) / 2,
							0,
						]}
						textRotation={textRotations[i]}
						text={text}
						active={
							activeSphere === i ? true : activeSphere === -1 ? true : false
						}
						onPointerOver={() => pointerOver(i)}
						onPointerOut={pointerOut}
						red={sphereData[i].red}
						blue={sphereData[i].blue}
						gray={sphereData[i].gray}
					/>
				</mesh>
			))}
			<Image url={logos} scale={0.2} position={[0, 0.01, 0.3]} />
			<Text scale={0.029} position={[0, -0.05, 0.3]} font={fontUrl}>
				Apps: All ({allApps})
			</Text>
		</group>
	);
};

export default Center;
