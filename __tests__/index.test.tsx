import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../src/pages/index'

describe('Home', () => {
	it('renders correctly', () => {
		render(<Home />)

		expect(screen.getByText('app')).toBeInTheDocument()
	})
})
