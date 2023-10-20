import { useSpring, animated, config } from '@react-spring/three'
import { useCursor } from '@react-three/drei'
import { useRef, useState } from 'react'

export default function Box() {
	const [active, setActive] = useState(false)
	const [hovered, setHover] = useState(false)
	useCursor(hovered)
	const boxMesh = useRef()

	const { color } = useSpring({
		color: active ? 'hotpink' : 'royalblue',
		config: config.wobbly,
	})

	const { scale } = useSpring({
		scale: active ? 1.5 : 1,
		config: config.wobbly,
	})

	return (
		<animated.mesh
			position={[0, 1, 0]}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
			scale={scale}
			onClick={() => setActive(!active)}
			ref={boxMesh}
		>
			<boxGeometry />
			<animated.meshPhongMaterial color={color} />
		</animated.mesh>
	)
}
