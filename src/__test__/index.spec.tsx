import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

describe('App Page', () => {
  it('renders home page', () => {
    render(<App />);
    const homePage = screen.getByTestId('home-page');
    expect(homePage).toBeInTheDocument;
  });
});
