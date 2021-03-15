import {
  render, waitFor, screen, fireEvent,
} from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe(App.name, () => {
  const mockResolvedValueRecords = {
    data:
      {
        data:
      [{
        id: '07075cdb-9e5c-41ec-8c09-9a1322dd92d8',
        name: 'Aankh Marey (From "Simmba")',
        genre: { id: '37146752-2c95-4204-a845-a32f3cdce9c8', name: 'Bollywood' },
        artist: { id: 'b22d7ed5-3ded-4958-a036-60453b7fc102', name: 'Neha Kakkar' },
        albumArtUrl: 'https://i.scdn.co/image/ab67616d0000b273dc1f496d2a8d75f7fda092b6',
        publishedAt: '2018-12-06T00:00:00',
      }],
      },
  };
  const mockResolvedValueLikes = {
    data: {
      data: {
        count: 1,
        like: false,
      },
    },
  };
  beforeEach(() => {
    jest.spyOn(axios, 'get')
      .mockResolvedValueOnce(
        mockResolvedValueRecords,
      )
      .mockResolvedValueOnce(mockResolvedValueLikes);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should render a component NavBar', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const navbarText = screen.getByText('Record');
    expect(navbarText.tagName).toBe('B');
  });

  test('should match snapshot', async () => {
    const app = await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    expect(app).toMatchSnapshot();
  });
});
