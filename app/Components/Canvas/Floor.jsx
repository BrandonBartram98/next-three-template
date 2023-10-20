import { useSpring, animated, config } from '@react-spring/three'
import { useRef, useState } from 'react'

export default function Floor() {
	return (
		<mesh rotation={[Math.PI / -2, 0, 0]}>
			<planeGeometry args={[1000, 1000]} />
			<meshStandardMaterial color={0xffffff} />
		</mesh>
	)
}
