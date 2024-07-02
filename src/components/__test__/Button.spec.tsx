import { render, screen } from '@testing-library/react';

import { Button } from '@components';

function renderComponent(label = 'label') {
  render(<Button label={label} />);
}

describe('Button component', () => {
  it('render correctly', () => {
    renderComponent();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument;
  });

  it('renders as disabled by default', () => {
    renderComponent();
    const button = screen.getByRole('button');
    expect(button).toBeDisabled;
  });

  it('displays specified label', () => {
    renderComponent('btnLabel');
    const button = screen.getByRole('button', { name: 'btnLabel' });
    expect(button).toBeInTheDocument;
  });
});
