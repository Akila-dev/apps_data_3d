/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Text } from '@react-three/drei';

import fontUrl from '../assets/fonts/Lato-Bold.ttf';

const StatsText = ({ stat, label, textAlign, position, scale }) => (
	<mesh position={position} scale={scale ? scale : 1}>
		<Text
			scale={0.028}
			position={[0, 0.01, 0]}
			font={fontUrl}
			anchorX={textAlign}
			color="white"
		>
			{stat}
		</Text>
		<Text
			scale={0.015}
			position={[0, -0.02, 0]}
			font={fontUrl}
			anchorX={textAlign}
			color="white"
		>
			{label}
		</Text>
	</mesh>
);

export default StatsText;
