import {
  fireEvent, render, screen,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

test('renders  react link', () => {
  const app = render(<BrowserRouter><Home /></BrowserRouter>);
  expect(app).toMatchSnapshot();
});

// test('renders getAllWords', () => {
//   render(<BrowserRouter><Home /></BrowserRouter>);
//   const linkToAllWords = screen.getByTestId('link-to-allwords');
//   fireEvent.click(linkToAllWords);
//   expect(document.location.href).toBe('http://localhost/allWords');
// });
