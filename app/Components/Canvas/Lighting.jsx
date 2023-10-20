import { useSpring, animated, config } from '@react-spring/three'
import { useRef, useState } from 'react'

export default function Lighting() {
	return (
		<>
			<ambientLight intensity={0.4} />
			<directionalLight
				intensity={0.7}
				castShadow
				shadow-bias={-0.0004}
				position={[-20, 20, 20]}
			></directionalLight>
		</>
	)
}
