import { HEADERS } from './config';

export const getArtistsAlbumId = id => fetch(`https://api.spotify.com/v1/artists/${id}/albums`, HEADERS)
  .then(data => data.json());

export const getRelatedArtists = id => fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`, HEADERS)
  .then(data => data.json());

export const getArtistsTopTracks = id => fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks`, HEADERS)
  .then(data => data.json());

export const getArtist = id => fetch(`https://api.spotify.com/v1/artists/${id}`, HEADERS)
  .then(data => data.json());

export const getArtists = id => fetch(`https://api.spotify.com/v1/artists?ids=${id}`, HEADERS)
  .then(data => data.json());
