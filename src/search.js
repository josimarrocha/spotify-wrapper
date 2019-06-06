import { API_URL } from './config';
import { toJSON } from './utils';

export const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer BQDN51tve92GpH7DHCrnO924ottUwa2WRIQxBqNsoqqNqt21lY20tszpDHgzk0x1JWTRlUk2oPYYOxQhxk0kLqlqr_S1r_KsFlkhsQl9EQTnOMveO81DW610UrgUrQGVUQFxn3XzTGG69bnNqp0M9DN77utW2x_TlB6T0SHvf4Zg',
  },
})
  .then(toJSON);

export const searchArtists = query => search(query, 'artist');
export const searchAlbuns = query => search(query, 'album');
export const searchTracks = query => search(query, 'track');
export const searchPlaylists = query => search(query, 'playlist');
