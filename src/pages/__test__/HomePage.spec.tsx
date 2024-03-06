import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HomePage from '../HomePage';

describe('Home Page', () => {
  it('render correctly', () => {
    render(<HomePage />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
