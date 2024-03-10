import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// import {SignUpPage} from '@pages'
import SignUpPage from '../auth/SignUpPage';

function renderComponent() {
  render(<SignUpPage />);
}

describe('Signup Page', () => {
  it('renders correctly', () => {
    renderComponent();
    expect(screen.getByTestId('signup-page')).toBeInTheDocument;
  })

  it('display Sign In heading text', () => {
    renderComponent();
    const heading = screen.getByRole('heading', {name: 'Sign Up'})
    expect(heading).toBeInTheDocument;
  })

  it('display sub heading text', () => {
    renderComponent();
    const subHeading = screen.getByRole('heading', {name: 'Create an account and start your Bookish adventure!'})
    expect(subHeading).toBeInTheDocument;
  })

  it('renders a textinput', () => {
    renderComponent();
    const input = screen.getByRole('textbox', {name: /name/i})
    expect(input).toBeInTheDocument
  })

  // it('display 2 textinput', () => {
  //   renderComponent();
  //   const inputs = screen.getAllByRole('textbox');
  //   expect(inputs).toHaveLength(2);
  // });
})