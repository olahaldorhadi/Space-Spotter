import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DropdownMenu from '../components/DropdownMenu'

describe('DropdownMenu component', () => {
    it('renders DropdownMenu component with the initial description', () => {
        // Mock onChange function
        const mockOnChange = vi.fn()

        // Render the DropdownMenu component
        render(
            <DropdownMenu
                description="Initial Description"
                inputType="campus"
                onChange={mockOnChange}
            />
        )

        // Check if the button with the initial description is present
        const buttonElement = screen.getByText('Initial Description')
        expect(buttonElement).toBeInTheDocument()

        // Check if the dropdown menu is not initially open
        const dropdownMenu = screen.queryByTestId('dropdown-menu')
        expect(dropdownMenu).not.toBeInTheDocument()

        expect(document.body).toMatchSnapshot()
    })
})
