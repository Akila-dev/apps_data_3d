/* eslint-disable react/prop-types */
import { Text } from '@react-three/drei';
import { Sphere, Fog } from '../components';
import { Image } from '../components';
import logos from '../assets/apps-logo.png';
import fontUrl from '../assets/fonts/Lato-Bold.ttf';

const Center = ({ sphereText, allApps }) => {
	const val = 0.35 * Math.PI;
	const radius = 2.6;
	const textRotations = [-0.45, 0.45, 1.25, -0.8, 0, 1, -1.35];
	return (
		<group>
			<Fog scale={[0.9, 0.9]} top={0.1} />

			{sphereText.map((text, i) => (
				<Sphere
					key={i}
					position={[
						Math.cos(val + Math.PI * 0.286 * i) * radius,
						Math.sin(val + Math.PI * 0.286 * i) * radius,
						0,
					]}
					labelPosition={[
						(Math.cos(val + Math.PI * 0.286 * i) * radius) / 2,
						(Math.sin(val + Math.PI * 0.286 * i) * radius) / 2,
						0,
					]}
					textRotation={textRotations[i]}
					text={text}
				/>
			))}
			<Image url={logos} scale={0.2} position={[0, 0.01, 0.3]} />
			<Text scale={0.029} position={[0, -0.05, 0.3]} font={fontUrl}>
				Apps: All ({allApps})
			</Text>
		</group>
	);
};

export default Center;
