import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe(App.name, () => {
  test('should match snapshot', async () => {
    const app = await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    expect(app).toMatchSnapshot();
  });
});
