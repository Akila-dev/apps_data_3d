/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useRef } from 'react';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';
import { Image } from '@react-three/drei';

import { StatsText } from '../components';

import circle from '../assets/circle.png';
import lines from '../assets/lines2.png';

const Circle = ({ position, stat, label, onClick }) => {
	const circleRef = useRef();
	useFrame((state, delta) => {
		// circleRef.current.rotation.x -= delta / 5;
		circleRef.current.rotation.z -= delta * 1;
	});
	return (
		<mesh position={position} onPointerDown={onClick}>
			<motion.mesh ref={circleRef}>
				<Image
					transparent
					url={circle}
					scale={[0.17, 0.17]}
					position={[0, 0, 0]}
				/>
			</motion.mesh>

			<mesh onClick={onClick}>
				<StatsText
					stat={stat}
					label={label}
					textAlign="center"
					position={[0, 0, 0]}
					scale={1.1}
					transparent
				/>
			</mesh>
			{/* OVERLAY FOR CLICK EVENT
			<Image transparent
				onClick={onClick}
				url={circle}
				scale={0.17}
				position={[0, 0, 1]}
				opacity={0.003}
			/> */}
		</mesh>
	);
};

const StatsExpandedContent = ({ position, automated, manual }) => (
	<mesh position={position}>
		<StatsText
			stat=""
			label={`${automated} AUTOMATED`}
			textAlign="center"
			position={[-0.005, 0.105, 0]}
			scale={1.1}
		/>
		<Image transparent url={lines} scale={[0.13, 0.13]} position={[0, 0, 0]} />
		<StatsText
			stat=""
			label={`${manual} MANUAL`}
			textAlign="center"
			position={[-0.005, -0.065, 0]}
			scale={1.1}
		/>
	</mesh>
);
const StatsNumbers = ({ position, resolver, open }) => (
	<group position={position}>
		<StatsText
			stat={resolver}
			label="RESOLVERS"
			textAlign="left"
			position={[0, 0.045, 0]}
		/>
		<StatsText
			stat={open}
			label="OPEN"
			textAlign="left"
			position={[0, -0.045, 0]}
		/>
	</group>
);

const Stats = ({
	position,
	stat,
	label,
	resolver,
	open,
	automated,
	manual,
}) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<mesh position={position}>
			<Circle
				onClick={() => setExpanded((prev) => !prev)}
				position={[0, 0, 0]}
				stat={stat}
				label={label}
			/>
			<mesh scale={expanded ? 1 : 0}>
				<StatsExpandedContent
					position={[0.14, 0, -0.1]}
					automated={automated}
					manual={manual}
				/>
			</mesh>
			<StatsNumbers
				position={[expanded ? 0.21 : 0.1, 0, 0]}
				resolver={resolver}
				open={open}
			/>
			{/* <StatsNumbers position={[0.1, 0, 0]} /> */}
		</mesh>
	);
};

export default Stats;
