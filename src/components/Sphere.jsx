/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion-3d';
// import { useFrame } from '@react-three/fiber';
import {
	// Sphere as SphereMesh,
	Text,
	// Points,
	// PointMaterial,
	Image,
	// Point,
	useTexture,
} from '@react-three/drei';
// import * as random from 'maath/random/dist/maath-random.esm';
// eslint-disable-next-line no-unused-vars
import * as THREE from 'three';
// import { Color, Vector3, Quaternion } from 'three';

import sphereFill from '../assets/earthlights.png';
import grayDot from '../assets/gray.png';
import redDot from '../assets/red.png';
import blueDot from '../assets/blue.png';
// import grayDot2 from '../assets/gray2.png';
// import redDot2 from '../assets/red2.png';
// import blueDot2 from '../assets/blue2.png';
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
	// const grayTexture2 = useTexture(grayDot2);
	// const redTexture2 = useTexture(redDot2);
	// const blueTexture2 = useTexture(blueDot2);

	const ref = useRef();
	const redRef = useRef();
	const blueRef = useRef();

	const [pos, setPos] = useState(new Float32Array());
	const [posRed, setPosRed] = useState(new Float32Array());
	const [posBlue, setPosBlue] = useState(new Float32Array());

	useEffect(() => {
		const totalPoints = 500;
		var radius = 1.0;
		var grayPoints = [];
		var redPoints = [];
		var bluePoints = [];
		for (let i = 0; i < (totalPoints * gray) / 100; i++) {
			let phi = 2 * 3.1415926 * Math.random();
			let csth = 1.0 - 2.0 * Math.random();
			let snth = Math.sqrt(1.0 - csth * csth);

			grayPoints.push(radius * snth * Math.sin((phi * gray) / 100));
			grayPoints.push(radius * snth * Math.cos((phi * gray) / 100));
			grayPoints.push(radius * csth);
		}

		for (let i = 0; i < (totalPoints * red) / 100; i++) {
			let phi = 2 * 3.1415926 * Math.random();
			let csth = 1.0 - 2.0 * Math.random();
			let snth = Math.sqrt(1.0 - csth * csth);

			redPoints.push(radius * snth * Math.sin((phi * red) / 100));
			redPoints.push(radius * snth * Math.cos((phi * red) / 100));
			redPoints.push(radius * csth);
		}
		for (let i = 0; i < (totalPoints * blue) / 100; i++) {
			let phi = 2 * 3.1415926 * Math.random();
			let csth = 1.0 - 2.0 * Math.random();
			let snth = Math.sqrt(1.0 - csth * csth);

			bluePoints.push(radius * snth * Math.sin((phi * blue) / 100));
			bluePoints.push(radius * snth * Math.cos((phi * blue) / 100));
			bluePoints.push(radius * csth);
		}
		setPos(() => new Float32Array(grayPoints));
		setPosRed(() => new Float32Array(redPoints));
		setPosBlue(() => new Float32Array(bluePoints));

		// var radius = 1.0;
		// var grayPoints = [];
		// for (var i = 0; i < 1000; i++) {
		// 	var phi = 2 * 3.1415926 * Math.random();
		// 	var csth = 1.0 - 2.0 * Math.random();
		// 	var snth = Math.sqrt(1.0 - csth * csth);

		// 	grayPoints.push(radius * snth * Math.cos(phi));
		// 	grayPoints.push(radius * snth * Math.sin(phi));
		// 	grayPoints.push(radius * csth);
		// }
		// setPos(() => new Float32Array(grayPoints));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<motion.mesh
			transition={{ type: 'spring', stiffness: 700, damping: 35 }}
			animate={{ scale: [0, 0.1] }}
			position={[0, 0, 0.21]}
		>
			<mesh position={position}>
				<mesh scale={1}>
					{pos.length > 0 && (
						<points ref={ref} rotation={[0, 0, gray * 0.063]}>
							<bufferGeometry attach="geometry">
								<bufferAttribute
									attach="attributes-position"
									count={pos.length / 3}
									array={pos}
									itemSize={3}
									normalize={false}
								/>
							</bufferGeometry>
							<pointsMaterial
								transparent
								map={grayTexture}
								opacity={active ? 1 : 0.2}
								size={0.12}
								sizeAttenuation={true}
								depthWrite={false}
								// roughness={0.1}
								// metalness={1}
							/>
						</points>
					)}
					{posRed.length > 0 && (
						<points ref={redRef} rotation={[0, 0, -blue * 0.06]}>
							<bufferGeometry attach="geometry">
								<bufferAttribute
									attach="attributes-position"
									count={posRed.length / 3}
									array={posRed}
									itemSize={3}
									normalize={false}
								/>
							</bufferGeometry>
							<pointsMaterial
								transparent
								map={redTexture}
								opacity={active ? 1 : 0.2}
								size={0.12}
								sizeAttenuation={true}
								depthWrite={false}
								// roughness={0.1}
								// metalness={1}
							/>
						</points>
					)}

					{posBlue.length > 0 && (
						<points ref={blueRef} rotation={[0, 0, 0]}>
							<bufferGeometry attach="geometry">
								<bufferAttribute
									attach="attributes-position"
									count={posBlue.length / 3}
									array={posBlue}
									itemSize={3}
									normalize={false}
								/>
							</bufferGeometry>
							<pointsMaterial
								transparent
								map={blueTexture}
								opacity={active ? 1 : 0.2}
								size={0.12}
								sizeAttenuation={true}
								depthWrite={false}
								// roughness={0.1}
								// metalness={1}
							/>
						</points>
					)}
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
						opacity={0}
					/>
				</mesh>
			</mesh>
		</motion.mesh>
	);
};

export default Sphere;
