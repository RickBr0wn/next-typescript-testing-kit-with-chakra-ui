import { Flex, Spacer, Heading, Code, Text } from '@chakra-ui/react'
import type { FC } from 'react'

const Welcome: FC = (): JSX.Element => {
	return (
		<Flex data-testid='welcome' flexDir={'column'} align={'center'} h={'calc(100vh - 80px)'}>
			{/* 80px is the height of the navbar */}
			<Spacer />
			<Heading>Welcome to this</Heading>
			<Heading color={'green.400'}> Next.js Typescript & Chakra-UI</Heading>
			<Heading>starter</Heading>
			<Flex flexDir={'column'} align={'center'} margin={'20px 0'} gap={1}>
				<Text mb={4}>Get started by editing:</Text>
				<Code data-testid='code-component'>pages/index.tsx</Code>
				<Code data-testid='code-component'>theme/theme.ts</Code>
				<Code data-testid='code-component'>components/Layout.tsx</Code>
				<Code data-testid='code-component'>components/Welcome.tsx</Code>
				<Code data-testid='code-component'>components/Navbar.tsx</Code>
			</Flex>
			<Text>Enjoy!</Text>
			<Heading mt={6}>🚀</Heading>
			<Spacer />
		</Flex>
	)
}

export default Welcome

// Path: src/components/welcome.tsx
// Created at: 21:38:10 - 28/03/2023
// Language: Typescript
// Framework: React/Next.js
