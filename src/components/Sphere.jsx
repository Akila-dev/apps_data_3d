/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';
import {
	// Sphere as SphereMesh,
	Text,
	Points,
	PointMaterial,
	Image,
	// Point,
	useTexture,
} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
// eslint-disable-next-line no-unused-vars
import * as THREE from 'three';
// import { Color, Vector3, Quaternion } from 'three';

import sphereFill from '../assets/earthlights.png';
import grayDot from '../assets/gray.png';
import redDot from '../assets/red.png';
import blueDot from '../assets/gray.png';
import fontUrl from '../assets/fonts/Lato-Bold.ttf';

const Sphere = ({
	position,
	labelPosition,
	textRotation,
	text,
	onPointerOver,
	onPointerOut,
	active,
	red,
	blue,
	gray,
	onClick,
}) => {
	const grayTexture = useTexture(grayDot);
	const redTexture = useTexture(redDot);
	const blueTexture = useTexture(blueDot);

	const ref = useRef();
	const redRef = useRef();
	const blueRef = useRef();
	// const [decal] = useTexture([sphereFill]);
	const [sphere, setSphere] = useState([0, 0, 0]);
	const [redPositions, setRedPositions] = useState([0, 0, 0]);
	const [bluePositions, setBluePositions] = useState([0, 0, 0]);

	useEffect(() => {
		setSphere(
			random.inSphere(new Float32Array((2000 * gray) / 100), { radius: 1 })
		);
		setRedPositions(
			random.inSphere(new Float32Array((2000 * red) / 100), {
				radius: 0.75,
			})
		);
		setBluePositions(
			random.inSphere(new Float32Array((2000 * blue) / 100), {
				radius: 0.5,
			})
		);
	}, []);

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 5;
		ref.current.rotation.y -= delta / 5;

		redRef.current.rotation.x -= delta / 5;
		redRef.current.rotation.y -= delta / 5;

		blueRef.current.rotation.x -= delta / 5;
		blueRef.current.rotation.y -= delta / 5;
	});

	// const redPositions = ;
	// const bluePositions = ;

	return (
		<motion.mesh
			transition={{ type: 'spring', stiffness: 700, damping: 35 }}
			animate={{ scale: [0, 0.1] }}
			position={[0, 0, 0.21]}
		>
			<mesh position={position}>
				<mesh
					position={[0, 0, 0]}
					scale={1}
					// onPointerOver={onPointerOver}
					// onPointerOut={onPointerOut}
				>
					<Points ref={ref} positions={sphere} stride={3} frustumCulled>
						<PointMaterial
							transparent
							// color={active ? 0x777777 : 0x333333}
							size={0.14}
							sizeAttenuation={true}
							depthWrite={false}
							map={grayTexture}
							opacity={active ? 0.8 : 0.3}
						/>
					</Points>
					<Points ref={redRef} positions={redPositions} stride={3}>
						<pointsMaterial
							transparent
							// color={active ? 0xaa0000 : 0x330000}
							map={redTexture}
							size={0.14}
							sizeAttenuation={true}
							depthWrite={false}
							opacity={active ? 0.8 : 0.3}
						/>
						{/* <Point position={[0, 0, 1]} color="red" /> */}
					</Points>
					<Points ref={blueRef} positions={bluePositions} stride={3}>
						<pointsMaterial
							transparent
							color={active ? 0x0000aa : 0x000033}
							size={0.14}
							sizeAttenuation={true}
							depthWrite={false}
							map={blueTexture}
							opacity={active ? 0.8 : 0.3}
						/>
						{/* <Point position={[0, 0, 1]} color="red" /> */}
					</Points>
				</mesh>
				<Text
					color={active ? 0xffffff : 0x333333}
					font={fontUrl}
					scale={0.2}
					position={labelPosition}
					rotation={[0, 0, textRotation]}
				>
					{text}
				</Text>
				<mesh
					onPointerOver={onPointerOver}
					onPointerOut={onPointerOut}
					onClick={onClick}
				>
					<Image
						url={sphereFill}
						scale={[1.75, 1.5]}
						transparent
						position={[0, 0, 1]}
						opacity={0.1}
					/>
				</mesh>
			</mesh>
		</motion.mesh>
	);
};

export default Sphere;
