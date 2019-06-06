// eslint-disable-next-line import/named
import { searchAlbuns } from '../src/search';

// eslint-disable-next-line import/no-extraneous-dependencies
global.fetch = require('node-fetch');

const albums = searchAlbuns('Eminem');
albums.then(data => console.log(data));
