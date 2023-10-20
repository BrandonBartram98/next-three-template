import { Inter } from 'next/font/google'
import './globals.css'
import Scene from './Components/Canvas/Scene'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Next Three Starter',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Scene />
				{children}
			</body>
		</html>
	)
}
