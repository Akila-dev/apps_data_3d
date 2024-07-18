/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useTexture } from '@react-three/drei';

const Image = ({ url, scale, position, opacity }) => {
	const texture = useTexture(url);
	return (
		<mesh scale={scale} position={position}>
			<planeGeometry args={[1, 1]} />
			<meshStandardMaterial
				map={texture}
				transparent
				opacity={opacity ? opacity : 1}
			/>
		</mesh>
	);
};

export default Image;
