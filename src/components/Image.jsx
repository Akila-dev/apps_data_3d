/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useTexture } from '@react-three/drei';

const Image = ({ url, scale, position, opacity, roughness }) => {
	const texture = useTexture(url);
	return (
		<mesh scale={scale} position={position}>
			<planeGeometry args={[1, 1]} />
			<meshStandardMaterial
				map={texture}
				transparent={true}
				opacity={opacity ? opacity : 1}
				roughness={roughness ? roughness : 1}
				metalness={0.4}
			/>
		</mesh>
	);
};

export default Image;
