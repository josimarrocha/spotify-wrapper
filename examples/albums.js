import { searchAlbuns } from '../src/main';

global.fetch = require('node-fetch');

const albums = searchAlbuns('Eminem');
albums.then(data => data.albums.items.map(item => console.log(item)));
