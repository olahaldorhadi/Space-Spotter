import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'
import '@testing-library/jest-dom' // Import jest-dom to extend expect

test('renders Footer component', () => {
    render(<Footer />)

    // Check if the explanation text is present
    const explanationTextElement = screen.getByText(
        'Pssst, du kan trykke på et rom for å se mer informasjon eller opprette en favoritt'
    )
    expect(explanationTextElement).toBeInTheDocument()

    expect(screen.getByTestId('footer-component')).toMatchSnapshot()
})
