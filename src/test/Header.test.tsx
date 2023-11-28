import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../components/Header'

describe('Header component', () => {
    it('renders Header component', () => {
        render(<Header />)

        // Check if the logo is present on the page
        const logoElement = screen.getByRole('img')
        expect(logoElement).toBeInTheDocument()

        // Check if the header text is present
        const headerTextElement = screen.getByRole('heading', { level: 1 })
        expect(headerTextElement).toHaveTextContent('Trenger du et rom?')

        // Check if the explanation text is present
        const explanationTextElement = screen.getByText(
            'Finn oversikt over rom på din campus!'
        )
        expect(explanationTextElement).toBeInTheDocument()

        // Create a "snapshot" by comparing the rendered HTML
        const headerComponentHTML = document.body.innerHTML
        expect(headerComponentHTML).toMatchSnapshot()
    })
})
