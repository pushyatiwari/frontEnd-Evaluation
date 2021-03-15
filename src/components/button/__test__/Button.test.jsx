import {
  render,
} from '@testing-library/react';
import React from 'react';
import Button from '../Button';

describe(Button.name, () => {
  test('renders  button', () => {
    const button = render(<Button />);
    expect(button).toMatchSnapshot();
  });
});
