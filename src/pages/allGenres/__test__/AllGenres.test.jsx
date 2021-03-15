import {
  render,
} from '@testing-library/react';
import React from 'react';
import AllGenres from '../AllGenres';

describe(AllGenres.name, () => {
  const mockGroupedGenres = {
    bollwood:
    [
      {
        id: '7ff3c998-3f7b-4b64-a764-868b58465992',
        name: 'Beautiful Mistakes (feat. Megan Thee Stallion)',
        genre: {
          id: '13082d62-0689-468a-8250-257bf2e434f3',
          name: 'Pop',
        },
        artist: { id: '2c05b7d6-f19a-4327-936e-49bfcbd9bf5c', name: 'Maroon 5' },
        albumArtUrl: 'https://i.scdn.co/image/ab67616d0000b273a6c1dea2b83a2309d9e0adc3',
      }],
  };
  test('renders  react link', () => {
    const app = render(<AllGenres groupedGenres={mockGroupedGenres} />);
    expect(app).toMatchSnapshot();
  });
});
