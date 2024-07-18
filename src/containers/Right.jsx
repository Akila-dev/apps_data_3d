/* eslint-disable react/no-unknown-property */
// import React from 'react';
import { Stats } from '../components';
// import { Image } from '@react-three/drei';

import { StatsText, Image } from '../components';

import lines from '../assets/lines1.png';

const Right = () => {
	return (
		<group className="flex flex-col gap-5">
			{/* <pointLight position={[1, 0, 1]} intensity={1000} /> */}
			<StatsText
				stat="150"
				label="ATTACK PATH"
				textAlign="center"
				position={[-0.005, 0.16, 0]}
			/>
			<Image
				url={lines}
				scale={0.25}
				transparent
				toneMapped
				position={[0, 0, 0]}
			/>
			<StatsText
				stat="633"
				label="CRITICAL RISKS"
				textAlign="center"
				position={[-0.005, -0.16, 0]}
			/>
			<Stats position={[0.15, 0.1, 0.1]} stat="55" label="INCIDENTS" />
			<Stats position={[0.15, -0.1, 0.1]} stat="62" label="ACTION PLANS" />
			{/* <Stats /> */}
		</group>
	);
};

export default Right;
