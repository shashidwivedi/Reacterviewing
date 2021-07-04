import React from 'react';
import { render } from '@testing-library/react';

import AlbumItem from '../album/AlbumItem';

it("checkAlbumTitle", () => {
  const albumData = {
    title: "I have a lot of eeees, elphants, eyes, and ears"
  };
  const albumItem = render(<AlbumItem album={albumData} />);
  const albumTitle = albumItem.getByTestId("title");

  expect(albumTitle.textContent).not.toMatch(/e/gi);
});