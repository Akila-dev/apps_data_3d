/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';
import {
	// Sphere as SphereMesh,
	Text,
	Points,
	// PointMaterial,
	// useTexture,
	// Decal,
} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// import img from '../assets/map.png';
import fontUrl from '../assets/fonts/Lato-Bold.ttf';

const Sphere = ({
	position,
	labelPosition,
	textRotation,
	text,
	onPointerOver,
	onPointerOut,
	gray,
	red,
	blue,
}) => {
	// const texture = useTexture(img);
	const ref = useRef();
	const redRef = useRef();
	const blueRef = useRef();
	// const [decal] = useTexture([img]);
	const [sphere, setSphere] = useState([0, 0, 0]);
	const [redSphere, setRedSphere] = useState([0, 0, 0]);
	const [blueSphere, setBlueSphere] = useState([0, 0, 0]);
	const [graySphere, setGraySphere] = useState([0, 0, 0]);
	const radius = 1;

	useEffect(() => {
		setSphere(random.inSphere(new Float32Array(2000), { radius: radius }));
		if (red) {
			setRedSphere(
				random.inSphere(new Float32Array((2000 * red) / 100), {
					radius: radius,
				})
			);
		}
		if (blue) {
			setBlueSphere(
				random.inSphere(new Float32Array((2000 * blue) / 100), {
					radius: radius,
				})
			);
		}
		if (gray) {
			setGraySphere(
				random.inSphere(new Float32Array((2000 * gray) / 100), {
					radius: radius,
				})
			);
		}
	}, []);

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 5;
		ref.current.rotation.y -= delta / 5;

		if (redRef) {
			redRef.current.rotation.x -= delta / 5;
			redRef.current.rotation.y -= delta / 5;
		}

		if (blueRef) {
			blueRef.current.rotation.x -= delta / 5;
			blueRef.current.rotation.y -= delta / 5;
		}
	});

	return (
		<motion.mesh
			transition={{ type: 'spring', stiffness: 700, damping: 35 }}
			animate={{ scale: [0, 0.1] }}
			position={[0, 0, 0.21]}
		>
			<mesh
				position={position}
				onPointerOver={onPointerOver}
				onPointerOut={onPointerOut}
			>
				<Points
					ref={ref}
					positions={gray ? graySphere : sphere}
					stride={3}
					frustumCulled
					// scale={0.5}
				>
					<pointsMaterial
						transparent
						color="#e8e8e7"
						size={0.08}
						sizeAttenuation={true}
						depthWrite={false}
					/>
				</Points>
				<Points
					ref={redRef}
					positions={redSphere}
					stride={3}
					frustumCulled
					scale={red / 100}
				>
					<pointsMaterial
						transparent
						color="red"
						size={0.08}
						sizeAttenuation={true}
						depthWrite={false}
					/>
				</Points>
				<Points
					ref={blueRef}
					positions={blueSphere}
					stride={3}
					frustumCulled
					scale={blue / 100}
				>
					<pointsMaterial
						transparent
						color="blue"
						size={0.08}
						sizeAttenuation={true}
						depthWrite={false}
					/>
				</Points>
				{/* <meshBasicMaterial map={texture} /> */}
				{/* <Decal debug position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1}>
					<meshBasicMaterial map={texture} />
				</Decal> */}
				<Text
					color="white"
					font={fontUrl}
					scale={0.2}
					position={labelPosition}
					rotation={[0, 0, textRotation]}
				>
					{text}
				</Text>
			</mesh>
		</motion.mesh>
	);
};

export default Sphere;
