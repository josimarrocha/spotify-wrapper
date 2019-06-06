import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {
  getArtistsAlbumId,
  getRelatedArtists,
  getArtistsTopTracks,
  getArtist,
  getArtists,
} from '../src/artist';

// getArtistsAlbumId
// getRelatedArtists
// getArtistsTopTracks
// getArtist
// getArtists

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Artists', () => {
  let fetchedStub;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ artists: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('somke tests', () => {
    it('should have getArtistsAlbumId method and to be function', () => {
      expect(getArtistsAlbumId).to.be.a('function');
    });

    it('should have getRelatedArtists method', () => {
      expect(getRelatedArtists).to.be.a('function');
    });

    it('should have getArtistsTopTracks method', () => {
      expect(getArtistsTopTracks).to.be.a('function');
    });

    it('should have getArtist method', () => {
      expect(getArtist).to.be.a('function');
    });

    it('should have getArtists method', () => {
      expect(getArtists).to.be.a('function');
    });
  });

  describe('getArtistsAlbumId', () => {
    it('should call fetch method', () => {
      const artistsAlbumId = getArtistsAlbumId();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artistsAlbumId = getArtistsAlbumId('0TnOYISbd1XYRBk9myaseg');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums');

      const artistsAlbumId2 = getArtistsAlbumId('0TnOYISbd1XYRBk9myaseh');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseh/albums');
    });

    it('should return the correct data from Promise', () => {
      const artistsAlbumId = getArtistsAlbumId('0TnOYISbd1XYRBk9myaseg');

      artistsAlbumId
        .then(data => expect(data).to.be.eql({ artists: 'name' }));
    });
  });

  describe('getRelatedArtistis', () => {
    it('should call fetch method', () => {
      const relatedArtistis = getRelatedArtists();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch method with the correct URL', () => {
      const relatedArtistis = getRelatedArtists('0TnOYISbd1XYRBk9myaseg');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/related-artists');

      const relatedArtistis2 = getRelatedArtists('0TnOYISbd1XYRBk9myaseh');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseh/related-artists');
    });

    it('should return the correct data from Promise', () => {
      const relatedArtistis = getRelatedArtists('0TnOYISbd1XYRBk9myaseg');
      relatedArtistis
        .then(data => expect(data).to.be.eql({ artists: 'name' }));
    });
  });

  describe('getArtistsTopTracks', () => {
    it('should call fetch method', () => {
      const artistsTopTracks = getArtistsTopTracks();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch method with the correct URL', () => {
      const artistsTopTracks = getArtistsTopTracks('0TnOYISbd1XYRBk9myaseg');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks');

      const artistsTopTracks2 = getArtistsTopTracks('0TnOYISbd1XYRBk9myaseA');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseA/top-tracks');
    });

    it('should return the correct data from Promise', () => {
      const artistsTopTracks = getArtistsTopTracks('0TnOYISbd1XYRBk9myaseA');
      artistsTopTracks
        .then(data => expect(data).to.be.eql({ artists: 'name' }));
    });
  });

  describe('getArtist', () => {
    it('should call fetch method', () => {
      const artist = getArtist();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch method with the correct URL', () => {
      const artist = getArtist('0TnOYISbd1XYRBk9myaseg');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg');

      const artist2 = getArtist('0TnOYISbd1XYRBk9myaseA');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseA');
    });

    it('should return the correct data from Promise', () => {
      const artist = getArtist('0TnOYISbd1XYRBk9myaseA');
      artist
        .then(data => expect(data).to.be.eql({ artists: 'name' }));
    });
  });

  describe('getArtists', () => {
    it('should call fetch method', () => {
      const artist = getArtists();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch method with the correct URL', () => {
      const artist = getArtists('0TnOYISbd1XYRBk9myaseg');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists?ids=0TnOYISbd1XYRBk9myaseg');

      const artist2 = getArtists('0TnOYISbd1XYRBk9myaseA');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists?ids=0TnOYISbd1XYRBk9myaseA');

      const artist3 = getArtists(['0TnOYISbd1XYRBk9myaseA', '0TnOYISbd1XYRBk9myasBA']);
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/artists?ids=0TnOYISbd1XYRBk9myaseA,0TnOYISbd1XYRBk9myasBA');
    });

    it('should return the correct data from Promise', () => {
      const artist = getArtists('0TnOYISbd1XYRBk9myaseA');
      artist
        .then(data => expect(data).to.be.eql({ artists: 'name' }));
    });
  });
});
