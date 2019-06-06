export const getArtistsAlbumId = id => fetch(`https://api.spotify.com/v1/artists/${id}/albums`)
  .then(data => data.json());

export const getRelatedArtists = id => fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`)
  .then(data => data.json());

export const getArtistsTopTracks = id => fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks`)
  .then(data => data.json());

export const getArtist = id => fetch(`https://api.spotify.com/v1/artists/${id}`)
  .then(data => data.json());

export const getArtists = id => fetch(`https://api.spotify.com/v1/artists?ids=${id}`)
  .then(data => data.json());
