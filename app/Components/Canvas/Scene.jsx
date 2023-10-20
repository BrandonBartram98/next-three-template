'use client'
import { Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Box from './Box'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import Floor from './Floor'
import Lighting from './Lighting'

export default function Scene() {
	return (
		<div className="fixed w-full h-full p-0 m-0">
			<Canvas camera={{ fov: 80, position: [0, 3, -5] }}>
				<color attach="background" args={['#141622']} />
				<Lighting />
				<EffectComposer disableNormalPass multisampling={8}>
					<N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
				</EffectComposer>
				<OrbitControls
					enableZoom={false}
					autoRotate
					autoRotateSpeed={1}
					enablePan={false}
				/>
				<Box />
				<Floor />
			</Canvas>
			<Loader />
		</div>
	)
}
