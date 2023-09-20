const { render, screen } = require('@testing-library/react');
const { describe, it } = require('@jest/globals');
const Header = require('../src/components/Header');

describe('Header Component', () => {
  it('renders correctly', () => {
    render(<Header />);
    
    // Use screen to interact with and assert elements in your component
    const headerElement = screen.getByText('Trenger du et rom?');
    expect(headerElement).toBeInTheDocument();
  });
});
