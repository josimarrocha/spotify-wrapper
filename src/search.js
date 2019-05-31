import { API_URL } from './config';
import { toJSON } from './utils';

export const search = (query, type) =>
  fetch(`${API_URL}/search?q=${query}&type=${type}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer BQAlEqwhON_mkHB7-bq-JM74d9nKvS87ZfLCAtXpT51MPtUMWWY59eQY3FZHZwWqBdyOwlpCJgXCUGN43MHiwdq94zc89XKWcAJKUVfTZZrVv8XOAswNUzhJ6o3xA9uUTobXhxcb-BParoOc4AegNH0vpr4awyhkDKHbipP_84nM',
    },
  })
    .then(toJSON);

export const searchArtists = query => search(query, 'artist');
export const searchAlbuns = query => search(query, 'album');
export const searchTracks = query => search(query, 'track');
export const searchPlaylists = query => search(query, 'playlist');
