import { Flex } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'
import Navbar from './navbar'

interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	return (
		<Flex h={'100vh'} w={'100vw'} flexDir={'column'}>
			<Navbar /> {/* This navbar is 80px tall */}
			{children}
		</Flex>
	)
}

export default Layout

// Path: src/components/layout.tsx
// Created at: 21:55:44 - 28/03/2023
// Language: Typescript
// Framework: React/Next.js
