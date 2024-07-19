/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';
import {
	// Sphere as SphereMesh,
	Text,
	Points,
	PointMaterial,
	Image,
	// useTexture,
} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';
import { Color, Vector3, Quaternion } from 'three';

import sphereFill from '../assets/earthlights.png';
import fontUrl from '../assets/fonts/Lato-Bold.ttf';

const Sphere = ({
	position,
	labelPosition,
	textRotation,
	text,
	onPointerOver,
	onPointerOut,
	active,
}) => {
	// const texture = useTexture(sphereFill);
	const ref = useRef();
	const mesh = useRef();
	const quaternion = new Quaternion();
	// const redRef = useRef();
	// const [decal] = useTexture([sphereFill]);
	const [sphere, setSphere] = useState([0, 0, 0]);
	const [sphereGeo, setSphereGeo] = useState([1, 0, 1, 0, 1, 1]);

	useEffect(() => {
		setSphere(random.inSphere(new Float32Array(2000), { radius: 1 }));
	}, []);

	useFrame((state, delta) => {
		// ref.current.rotation.x -= delta / 5;
		// ref.current.rotation.y -= delta / 5;

		mesh.current.rotation.x -= delta / 5;
		mesh.current.rotation.y -= delta / 5;
	});

	// useEffect(() => {
	// 	var geometry = new Float32Array(2000);
	// 	// Begins
	// 	const distance = Math.min(200, window.innerWidth / 4);

	// 	for (let i = 0; i < 2000; i++) {
	// 		var vertex = new THREE.Vector3();

	// 		var theta = THREE.MathUtils.randFloatSpread(360);
	// 		var phi = THREE.MathUtils.randFloatSpread(360);

	// 		vertex.x = distance * Math.sin(theta) * Math.cos(phi);
	// 		vertex.y = distance * Math.sin(theta) * Math.cos(phi);
	// 		vertex.z = distance * Math.cos(theta);
	// 		geometry[i] = vertex;
	// 	}

	// 	setSphereGeo(geometry);
	// }, []);

	useEffect(() => {
		// Get the current attributes of the geometry
		const currentPositions = mesh.current.geometry.attributes.position;
		// Copy the attributes
		const originalPositions = currentPositions.clone();
		const originalPositionsArray = originalPositions?.array || [];

		// Go through each vector (series of 3 values) and modify the values
		for (let i = 0; i < originalPositionsArray.length; i = i + 3) {
			const modifiedPositionVector = new Vector3(
				originalPositionsArray[i],
				originalPositionsArray[i + 1],
				originalPositionsArray[i + 2]
			);
			const upVector = new Vector3(0, 1, 0);

			// Rotate along the y axis (0, 1, 0)
			quaternion.setFromAxisAngle(
				upVector,
				(Math.PI / 180) *
					(modifiedPositionVector.y + 50) *
					Math.floor(Math.random() * 360) // the higher along the y axis the vertex is, the more we rotate
			);
			modifiedPositionVector.applyQuaternion(quaternion);

			// Apply the modified position vector coordinates to the current position attributes array
			currentPositions.array[i] = modifiedPositionVector.x;
			currentPositions.array[i + 1] = modifiedPositionVector.y;
			currentPositions.array[i + 2] = modifiedPositionVector.z;
		}
		// Set the needsUpdate flag to "true"
		currentPositions.needsUpdate = true;
	}, []);

	return (
		<motion.mesh
			transition={{ type: 'spring', stiffness: 700, damping: 35 }}
			animate={{ scale: [0, 0.1] }}
			position={[0, 0, 0.21]}
		>
			<mesh position={position}>
				<mesh
					// ref={mesh}
					position={[0, 0, 0]}
					scale={1}
					// onPointerOver={onPointerOver}
					// onPointerOut={onPointerOut}
				>
					{/* <Points ref={ref} positions={sphere} stride={3} frustumCulled>
						<PointMaterial
							transparent
							color="#fffdf5"
							size={0.1}
							sizeAttenuation={true}
							depthWrite={false}
							opacity={active ? 1 : 0.2}
						/>
					</Points> */}
					{/* <sphereGeometry args={[1, 32, 32]} /> */}
					{/* <meshLambertMaterial size={0.15} /> */}

					<points ref={mesh} frustumCulled>
						<sphereGeometry args={[1, 32, 22, 0]} />
						{/* <bufferGeometry attach="geometry">
							<bufferAttribute
								attach="attributes-position"
								count={sphereGeo.length / 3}
								array={sphereGeo}
								itemSize={3}
								normalize={false}
							/>
						</bufferGeometry> */}
						<pointsMaterial
							transparent
							color={active ? 0xfffdf5 : 0x333333}
							size={0.1}
							sizeAttenuation={true}
							depthWrite={false}
							opacity={active ? 1 : 0.2}
							frustumCulled
						/>
					</points>
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
				<mesh onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
					<Image
						url={sphereFill}
						scale={[1.75, 1.5]}
						transparent
						position={[0, 0, 0]}
						opacity={0.1}
					/>
				</mesh>
			</mesh>
		</motion.mesh>
	);
};

export default Sphere;
