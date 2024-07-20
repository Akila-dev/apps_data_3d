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
import { Color, Vector3, Quaternion } from 'three';

import sphereFill from '../assets/earthlights.png';
import grayDot from '../assets/gray.png';
import redDot from '../assets/red.png';
import blueDot from '../assets/blue.png';
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
	sphereFill;
	const texture = useTexture(sphereFill);
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

	const [grayPoints, setGrayPoints] = useState([0, 0]);
	const [redPoints, setRedPoints] = useState([0, 0]);
	const [bluePoints, setBluePoints] = useState([0, 0]);

	useEffect(() => {
		setGrayPoints([0, Math.PI]);
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
		// ref.current.rotation.x -= delta / 5;
		// ref.current.rotation.y -= delta / 5;
		// redRef.current.rotation.x -= delta / 5;
		// redRef.current.rotation.y -= delta / 5;
		// blueRef.current.rotation.x -= delta / 5;
		// blueRef.current.rotation.y -= delta / 5;
		// mesh.current.rotation.y -= delta / 5;
		// mesh2.current.rotation.y -= delta / 5;
	});

	const mesh = useRef();
	const mesh2 = useRef();
	const mesh3 = useRef();
	const quaternion = new Quaternion();

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
					(modifiedPositionVector.y + (10 * 1) / 5) *
					Math.floor(Math.random() * 9) // the higher along the y axis the vertex is, the more we rotate
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

	useEffect(() => {
		// Get the current attributes of the geometry
		const currentPositions = mesh2.current.geometry.attributes.position;
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
					(modifiedPositionVector.y + (10 * 1) / 5) *
					Math.floor(Math.random() * 3) // the higher along the y axis the vertex is, the more we rotate
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

	useEffect(() => {
		// Get the current attributes of the geometry
		const currentPositions = mesh3.current.geometry.attributes.position;
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
					(modifiedPositionVector.y + (10 * 1) / 5) *
					Math.floor(Math.random() * 3) // the higher along the y axis the vertex is, the more we rotate
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
					position={[0, 0, 0]}
					scale={1}
					// onPointerOver={onPointerOver}
					// onPointerOut={onPointerOut}
				>
					<points ref={mesh} frustumCulled rotation={[1.5, -1.5, 0]}>
						<sphereGeometry
							args={[
								1,
								gray > 0 ? Math.floor((32 * gray) / 100) : 0,
								gray > 0 ? 22 : 0,
								0,
								(Math.PI * 2 * gray) / 100,
							]}
						/>
						<pointsMaterial
							transparent
							color={active ? 0xeeedf5 : 0x333333}
							frustumCulled
							size={0.1}
							sizeAttenuation={true}
							depthWrite={false}
							// map={texture}
							// map={grayTexture}
							opacity={active ? 1 : 0.2}
						/>
					</points>
					<points ref={mesh2} frustumCulled rotation={[1.5, -1.5, 0]}>
						<sphereGeometry
							args={[
								1,
								red > 0 ? Math.floor((32 * red) / 100) : 0,
								red > 0 ? 22 : 0,

								-(Math.PI * 2 * blue) / 100,
								-(Math.PI * 2 * red) / 100,
							]}
						/>
						<pointsMaterial
							transparent
							color={active ? 0xcc0000 : 0x330000}
							side={THREE.DoubleSide}
							size={0.1}
							sizeAttenuation={true}
							depthWrite={false}
							// map={redTexture}
							opacity={active ? 1 : 0.2}
						/>
					</points>
					<points ref={mesh3} frustumCulled rotation={[1.5, -1.5, 0]}>
						<sphereGeometry
							args={[
								1,
								blue > 0 ? Math.floor((32 * blue) / 100) : 0,
								blue > 0 ? 22 : 0,
								0,
								-(Math.PI * 2 * blue) / 100,
							]}
						/>
						<pointsMaterial
							transparent
							color={active ? 0x0000cc : 0x000033}
							side={THREE.DoubleSide}
							size={0.1}
							sizeAttenuation={true}
							depthWrite={false}
							map={blueTexture}
							opacity={active ? 1 : 0.2}
						/>
					</points>
					{/* <Points ref={ref} positions={sphere} stride={3} frustumCulled>
						<PointMaterial
							transparent
							// color={active ? 0x777777 : 0x333333}
							size={0.14}
							sizeAttenuation={true}
							depthWrite={false}
							map={grayTexture}
							opacity={active ? 1 : 0.3}
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
							opacity={active ? 1 : 0.3}
						/>
						<Point position={[0, 0, 1]} color="red" />
					</Points>
					<Points ref={blueRef} positions={bluePositions} stride={3}>
						<pointsMaterial
							transparent
							color={active ? 0x0000aa : 0x000033}
							size={0.14}
							sizeAttenuation={true}
							depthWrite={false}
							map={blueTexture}
							opacity={active ? 1 : 0.3}
						/>
					</Points> */}
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
