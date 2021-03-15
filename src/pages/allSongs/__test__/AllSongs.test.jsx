import {
  render,
} from '@testing-library/react';
import React from 'react';
import AllSongs from '../AllSongs';

describe(AllSongs.name, () => {
  const mockSongs = [
    {
      id: '07075cdb-9e5c-41ec-8c09-9a1322dd92d8',
      name: 'Aankh Marey (From "Simmba")',
      genre: { id: '37146752-2c95-4204-a845-a32f3cdce9c8', name: 'Bollywood' },
      artist: { id: 'b22d7ed5-3ded-4958-a036-60453b7fc102', name: 'Neha Kakkar' },
      albumArtUrl: 'https://i.scdn.co/image/ab67616d0000b273dc1f496d2a8d75f7fda092b6',
    },
  ];
  test('renders  react link', () => {
    const app = render(<AllSongs allsongs={mockSongs} />);
    expect(app).toMatchSnapshot();
  });
});
