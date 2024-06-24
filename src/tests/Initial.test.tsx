import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TestComponent from '../components/TestComponent'

test('renders Tailwind Test heading', () => {
    render(<TestComponent />)
    const headingElement = screen.getByText(/Tailwind Test/i)
    expect(headingElement).toBeInTheDocument()
})

test('renders the styled paragraph', () => {
    render(<TestComponent />)
    const paragraphElement = screen.getByText(/This should be styled with Tailwind CSS/i)
    expect(paragraphElement).toBeInTheDocument()
})
