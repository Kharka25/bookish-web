import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { SignUpPage } from '@pages';

function renderComponent() {
  render(<SignUpPage />);
}

describe('Signup Page', () => {
  describe('Form Layout', () => {
    it('renders correctly', () => {
      renderComponent();
      expect(screen.getByTestId('signup-page')).toBeInTheDocument;
    });

    it('display Sign Up heading text', () => {
      renderComponent();
      const heading = screen.getByRole('heading', { name: 'Sign Up' });
      expect(heading).toBeInTheDocument;
    });

    it('display sub heading text', () => {
      renderComponent();
      const subHeading = screen.getByRole('heading', {
        name: 'Create an account and start your Bookish adventure!',
      });
      expect(subHeading).toBeInTheDocument;
    });

    it('renders first name textinput', () => {
      renderComponent();
      const input = screen.getByRole('textbox', { name: /First name/i });
      expect(input).toBeInTheDocument;
    });

    it('renders last name textinput', () => {
      renderComponent();
      const input = screen.getByRole('textbox', { name: /Last name/i });
      expect(input).toBeInTheDocument;
    });

    it('renders email textinput', () => {
      renderComponent();
      const input = screen.getByLabelText('Email');
      expect(input).toBeInTheDocument;
    });

    it('renders email input as email type', () => {
      renderComponent();
      const input = screen.getByLabelText('Email');
      expect(input).toHaveAttribute('type', 'email');
    });

    it('renders password textinput', () => {
      renderComponent();
      const input = screen.getByLabelText('Password');
      expect(input).toBeInTheDocument;
    });

    it('renders password input as password type', () => {
      renderComponent();
      const input = screen.getByLabelText('Password');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('renders a button', () => {
      renderComponent();
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('renders button with sign up or register text', () => {
      renderComponent();
      const button = screen.queryByRole('button', { name: 'Sign Up' });
      expect(button).toBeInTheDocument();
    });

    it('renders button with disabled initial state', () => {
      renderComponent();
      const button = screen.queryByRole('button', { name: 'Sign Up' });
      expect(button).toBeDisabled();
    });
  });

  describe('Form Interaction', () => {
    it('enables button when password criteria is met', async () => {
      renderComponent();
      const firstNameInput = screen.getByLabelText('First name');
      const lastNameInput = screen.getByLabelText('Last name');
      const emailInput = screen.getByLabelText('Email');
      const passwordInput = screen.getByLabelText('Password');
      await userEvent.type(firstNameInput, 'John');
      await userEvent.type(lastNameInput, 'Doe');
      await userEvent.type(emailInput, 'jon@mail.com');
      await userEvent.type(passwordInput, '12345As@');
      const button = screen.queryByRole('button', { name: 'Sign Up' });
      expect(button).toBeEnabled();
    });
  });
});
