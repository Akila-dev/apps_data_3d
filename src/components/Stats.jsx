/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import { Image } from '@react-three/drei';
import { useState } from 'react';

import { StatsText, Image } from '../components';

import circle from '../assets/circle.png';
import lines from '../assets/lines2.png';

const Circle = ({ position, stat, label, onClick }) => (
	<mesh onClick={onClick} position={position}>
		<Image url={circle} scale={0.17} position={[0, 0, -0.01]} />

		<StatsText
			stat={stat}
			label={label}
			textAlign="center"
			position={[0, 0, 0]}
			scale={1.1}
		/>
		{/* OVERLAY FOR CLICK EVENT */}
		<Image url={circle} scale={0.17} position={[0, 0, 1]} opacity={0.001} />
	</mesh>
);

const StatsExpandedContent = ({ position }) => (
	<mesh position={position}>
		<StatsText
			stat=""
			label="89 AUTOMATED"
			textAlign="center"
			position={[-0.005, 0.11, 0]}
			scale={1.1}
		/>
		<Image url={lines} scale={0.13} position={[0, 0, 0]} />
		<StatsText
			stat=""
			label="233 MANUAL"
			textAlign="center"
			position={[-0.005, -0.07, 0]}
			scale={1.1}
		/>
	</mesh>
);
const StatsNumbers = ({ position }) => (
	<group position={position}>
		<StatsText
			stat="44"
			label="RESOLVERS"
			textAlign="left"
			position={[0, 0.045, 0]}
		/>
		<StatsText
			stat="11"
			label="OPEN"
			textAlign="left"
			position={[0, -0.045, 0]}
		/>
	</group>
);

const Stats = ({ position, stat, label }) => {
	const [expanded, setExpanded] = useState(false);

	// useEffect(() => {
	// 	if (expanded) {
	// 		console.log('expanded');
	// 	}
	// }, [expanded]);

	return (
		<mesh position={position}>
			<Circle
				onClick={() => setExpanded((prev) => !prev)}
				position={[0, 0, 0]}
				stat={stat}
				label={label}
			/>
			<mesh scale={expanded ? 1 : 0}>
				<StatsExpandedContent position={[0.14, 0, -0.1]} />
			</mesh>
			<StatsNumbers position={[expanded ? 0.21 : 0.1, 0, 0]} />
			{/* <StatsNumbers position={[0.1, 0, 0]} /> */}
		</mesh>
	);
};

export default Stats;
