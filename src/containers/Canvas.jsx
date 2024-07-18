/* eslint-disable react/no-unknown-property */

// import {useState} from 'react'
import { Canvas as SceneCanvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';
import { Center, Left, Right } from '../containers';

// import img from '../assets/aly.png';

const Canvas = () => {
	// const [activeSphere, setActiveSphere] = useState(-1)
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
	return (
		<div className="h-screen w-full">
			<SceneCanvas camera={{ position: [0, 0, 1], fov: 10 }}>
				<OrbitControls enableRotate={false} />
				<ambientLight intensity={2} />
				{/* <Sphere position={[2, 2, 0]} /> */}
				<group position={[0, 0.05, 2]}>
					<group scale={1.5} position={[-1.1, 0, -10]}>
						<Left leftText={leftText} />
					</group>
					<group scale={1.5} position={[0, 0, -9]}>
						<Center sphereText={sphereText} allApps={245} />
					</group>
					<group scale={1.5} position={[0.85, 0, -10]}>
						<Right />
					</group>
				</group>
				{/* <gridHelper color="white" args={[1, 1]} /> */}
			</SceneCanvas>
		</div>
	);
};

export default Canvas;
