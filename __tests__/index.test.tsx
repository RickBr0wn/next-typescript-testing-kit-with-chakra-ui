import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

describe('Home', () => {
	it('renders the welcome component', () => {
		render(<Home />)
		expect(screen.getByRole('main')).toBeInTheDocument()
	})
})
