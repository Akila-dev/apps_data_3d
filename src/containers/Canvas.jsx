/* eslint-disable react/no-unknown-property */

import { useState, Suspense } from 'react';
import { Canvas as SceneCanvas } from '@react-three/fiber';
// import * as THREE from 'three';
import { Center, Left, Right } from '../containers';

// import img from '../assets/aly.png';

const Canvas = () => {
	// const [hovering, setHovering] = useState(false);
	const [activeSphere, setActiveSphere] = useState(-1);
	const [activeData, setActiveData] = useState(0);

	const leftText = [
		'HTTP/S TRAFFIC',
		'FLOW LOGS',
		'WORKLOAD EVENTS',
		'CLOUD LOGS',
		'CLOUD CONFIG',
		'WORKLOAD SNAPS',
		'EXPOSURE SCANS',
	];
	const sphereText = [
		'COMPUTE',
		'APIS',
		'PAAS',
		'IAM',
		'NETWORK',
		'STORAGE',
		'AI',
	];
	const sphereData = [
		// {
		// 	attackPath: 150,
		// 	criticalRisks: 633,
		// 	incidents: 55,
		// 	actionPlans: 62,
		// 	incidentResolvers: 44,
		// 	incidentOpen: 11,
		// 	incidentAutomated: 89,
		// 	incidentManual: 64,
		// 	aPResolvers: 44,
		// 	aPOpen: 16,
		// 	aAutomated: 89,
		// 	aManual: 24,
		// 	gray: 80,
		// 	red: 15,
		// 	blue: 5,
		// },
		{
			attackPath: 36,
			criticalRisks: 23,
			incidents: 7,
			actionPlans: 16,
			incidentResolvers: 4,
			incidentOpen: 3,
			incidentAutomated: 89,
			incidentManual: 64,
			aPResolvers: 15,
			aPOpen: 1,
			aAutomated: 89,
			aManual: 24,
			gray: 80,
			red: 15,
			blue: 5,
		},
		{
			attackPath: 64,
			criticalRisks: 10,
			incidents: 6,
			actionPlans: 2,
			incidentResolvers: 14,
			incidentOpen: 22,
			incidentAutomated: 29,
			incidentManual: 34,
			aPResolvers: 44,
			aPOpen: 12,
			aAutomated: 29,
			aManual: 29,
			gray: 80,
			red: 15,
			blue: 5,
		},
		{
			attackPath: 36,
			criticalRisks: 26,
			incidents: 7,
			actionPlans: 32,
			incidentResolvers: 4,
			incidentOpen: 2,
			incidentAutomated: 89,
			incidentManual: 64,
			aPResolvers: 4,
			aPOpen: 2,
			aAutomated: 89,
			aManual: 24,
			gray: 70,
			red: 30,
			blue: 0,
		},
		{
			attackPath: 36,
			criticalRisks: 26,
			incidents: 7,
			actionPlans: 32,
			incidentResolvers: 4,
			incidentOpen: 2,
			incidentAutomated: 89,
			incidentManual: 64,
			aPResolvers: 4,
			aPOpen: 2,
			aAutomated: 89,
			aManual: 24,
			gray: 80,
			red: 0,
			blue: 20,
		},
		{
			attackPath: 36,
			criticalRisks: 26,
			incidents: 7,
			actionPlans: 32,
			incidentResolvers: 4,
			incidentOpen: 2,
			incidentAutomated: 89,
			incidentManual: 64,
			aPResolvers: 4,
			aPOpen: 2,
			aAutomated: 89,
			aManual: 24,
			gray: 100,
			red: 0,
			blue: 0,
		},
		{
			attackPath: 8,
			criticalRisks: 217,
			incidents: 9,
			actionPlans: 19,
			incidentResolvers: 7,
			incidentOpen: 2,
			incidentAutomated: 39,
			incidentManual: 46,
			aPResolvers: 15,
			aPOpen: 4,
			aAutomated: 34,
			aManual: 20,
			gray: 80,
			red: 15,
			blue: 5,
		},
		{
			attackPath: 36,
			criticalRisks: 26,
			incidents: 7,
			actionPlans: 32,
			incidentResolvers: 4,
			incidentOpen: 2,
			incidentAutomated: 89,
			incidentManual: 64,
			aPResolvers: 4,
			aPOpen: 2,
			aAutomated: 89,
			aManual: 24,
			gray: 75,
			red: 20,
			blue: 5,
		},

		// Last one must always be For the Shadow Cloud
		{
			attackPath: 36,
			criticalRisks: 26,
			incidents: 7,
			actionPlans: 32,
			incidentResolvers: 4,
			incidentOpen: 2,
			incidentAutomated: 89,
			incidentManual: 64,
			aPResolvers: 4,
			aPOpen: 2,
			aAutomated: 89,
			aManual: 24,
			gray: 100,
			red: 0,
			blue: 0,
		},
	];
	return (
		<div className="h-screen w-full">
			<SceneCanvas camera={{ position: [0, 0, 1], fov: 10 }}>
				<ambientLight intensity={2} />
				<Suspense>
					<group position={[-0.03, 0.05, 0.5]}>
						<group scale={1.5} position={[-1.1, 0, -10]}>
							<Left
								leftText={leftText}
								activeSphere={activeSphere}
								setActiveSphere={setActiveSphere}
								dataLength={sphereData.length}
								sphereData={sphereData}
								setActiveData={setActiveData}
							/>
						</group>
						<group scale={1.5} position={[0, 0, -9]}>
							<Center
								sphereText={sphereText}
								sphereData={sphereData}
								allApps={245}
								activeSphere={activeSphere}
								setActiveSphere={setActiveSphere}
								setActiveData={setActiveData}
							/>
						</group>
						<group scale={1.5} position={[0.85, 0, -10]}>
							<Right
								sphereData={sphereData}
								activeSphere={activeSphere}
								activeData={activeData}
								setActiveData={setActiveData}
							/>
						</group>
					</group>
				</Suspense>
				{/* <gridHelper color="white" args={[1, 1]} /> */}
			</SceneCanvas>
		</div>
	);
};

export default Canvas;
