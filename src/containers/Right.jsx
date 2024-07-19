/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from 'react';
import { Stats } from '../components';
// import { Image } from '@react-three/drei';

import { StatsText, Image } from '../components';

import lines from '../assets/lines1.png';

const Right = ({ sphereData, activeSphere }) => {
	return (
		<group className="flex flex-col gap-5">
			{/* <pointLight position={[1, 0, 1]} intensity={1000} /> */}
			<StatsText
				stat={
					activeSphere === -1
						? sphereData[0].attackPath
						: sphereData[activeSphere].attackPath
				}
				label="ATTACK PATH"
				textAlign="center"
				position={[-0.016, 0.16, 0]}
			/>
			<Image
				url={lines}
				scale={0.25}
				transparent
				toneMapped
				position={[0, 0, 0]}
			/>
			<StatsText
				stat={
					activeSphere === -1
						? sphereData[0].criticalRisks
						: sphereData[activeSphere].criticalRisks
				}
				label="CRITICAL RISKS"
				textAlign="center"
				position={[-0.016, -0.16, 0]}
			/>
			<Stats
				position={[0.15, 0.1, 0.1]}
				stat={
					activeSphere === -1
						? sphereData[0].incidents
						: sphereData[activeSphere].incidents
				}
				label="INCIDENTS"
				resolver={
					activeSphere === -1
						? sphereData[0].incidentResolvers
						: sphereData[activeSphere].incidentResolvers
				}
				open={
					activeSphere === -1
						? sphereData[0].incidentOpen
						: sphereData[activeSphere].incidentOpen
				}
				automated={
					activeSphere === -1
						? sphereData[0].incidentAutomated
						: sphereData[activeSphere].incidentAutomated
				}
				manual={
					activeSphere === -1
						? sphereData[0].incidentManual
						: sphereData[activeSphere].incidentManual
				}
			/>
			<Stats
				position={[0.15, -0.1, 0.1]}
				stat={
					activeSphere === -1
						? sphereData[0].actionPlans
						: sphereData[activeSphere].actionPlans
				}
				label="ACTION PLANS"
				resolver={
					activeSphere === -1
						? sphereData[0].aPResolvers
						: sphereData[activeSphere].aPResolvers
				}
				open={
					activeSphere === -1
						? sphereData[0].aPOpen
						: sphereData[activeSphere].aPOpen
				}
				automated={
					activeSphere === -1
						? sphereData[0].aAutomated
						: sphereData[activeSphere].aAutomated
				}
				manual={
					activeSphere === -1
						? sphereData[0].aManual
						: sphereData[activeSphere].aManual
				}
			/>
			{/* <Stats /> */}
		</group>
	);
};

export default Right;
