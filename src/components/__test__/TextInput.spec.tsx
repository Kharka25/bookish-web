import { render, screen } from '@testing-library/react';

import { TextInput } from '@components';

function renderComponent(label = 'label') {
  render(<TextInput htmlFor={label} label={label} />);
}

describe('TextInput component', () => {
  it('renders correctly', () => {
    renderComponent();
    const textInput = screen.getByRole('textbox', { name: /label/i });
    expect(textInput).toBeInTheDocument;
  });
});
