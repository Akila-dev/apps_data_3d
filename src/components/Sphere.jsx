/* eslint-disable react/no-unknown-property */

import { useRef, useState } from 'react';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';
import {
	// Sphere as SphereMesh,
	Text,
	Points,
	PointMaterial,
	// useTexture,
} from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// import img from '../assets/sphere.png';
import fontUrl from '../assets/fonts/Lato-Bold.ttf';

// eslint-disable-next-line react/prop-types
const Sphere = ({ position, labelPosition, textRotation, text }) => {
	// const texture = useTexture(img);
	const ref = useRef();
	// const [decal] = useTexture([img]);
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(2000), { radius: 1 })
	);

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
				<Points ref={ref} positions={sphere} stride={3} frustumCulled>
					<PointMaterial
						transparent
						color="#fffdf5"
						size={0.1}
						sizeAttenuation={true}
						depthWrite={false}
					/>
				</Points>
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
