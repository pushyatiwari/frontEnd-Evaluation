import {
  render,
} from '@testing-library/react';
import React from 'react';
import Navbar from '../Navbar';

describe(Navbar.name, () => {
  test('renders  navbar', () => {
    const navbar = render(<Navbar />);
    expect(navbar).toMatchSnapshot();
  });
});
