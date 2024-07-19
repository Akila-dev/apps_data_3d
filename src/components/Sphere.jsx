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
	// useTexture,
} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

import sphereFill from '../assets/sphere.png';
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
	// const redRef = useRef();
	// const [decal] = useTexture([sphereFill]);
	const [sphere, setSphere] = useState([0, 0, 0]);

	useEffect(() => {
		setSphere(random.inSphere(new Float32Array(2000), { radius: 1 }));
	}, []);

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 5;
		ref.current.rotation.y -= delta / 5;
	});

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
					onPointerOver={onPointerOver}
					onPointerOut={onPointerOut}
				>
					<Points ref={ref} positions={sphere} stride={3} frustumCulled>
						<PointMaterial
							transparent
							color="#fffdf5"
							size={0.1}
							sizeAttenuation={true}
							depthWrite={false}
							opacity={active ? 1 : 0.2}
						/>
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
				<Image
					url={sphereFill}
					scale={[1.95, 1.95]}
					transparent
					position={[0, 0, 0]}
					opacity={0.1}
				/>
			</mesh>
		</motion.mesh>
	);
};

export default Sphere;
