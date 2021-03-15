import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

describe(Home.name, () => {
  test('renders  react link', () => {
    const app = render(<BrowserRouter><Home /></BrowserRouter>);
    expect(app).toMatchSnapshot();
  });

  test('renders text', () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    const homeText = screen.getByText('seems a bit empty in here...');
    expect(homeText.tagName).toBe('P');
  });

  // test('renders text', async () => {
  //   await waitFor(() => render(<BrowserRouter><Home /></BrowserRouter>));
  //   const homeText = screen.getByTestId('sync-button');
  //   fireEvent.click(homeText);
  //   expect(document.location.href).toBe('http://localhost/allsongs');
  // });
});
