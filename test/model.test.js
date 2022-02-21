const sinon = require('sinon');
const { expect } = require('chai');
const Album = require('../model/album');
const connection = require('../model/connection');

describe('Na camada Models', () => {
  describe('Testa a função getAllAlbums', () => {
    const albums = [{
      id: 1,
      album: "Junho",
      artist_id: 1
    },
    {
      id: 2,
      album: "Adeus, Robô",
      artist_id: 2
    }];
    
    before(async () => {
      sinon.stub(connection, 'execute').resolves(albums)
    });

    after(async () => {
      connection.execute.restore();
    });

    it('Retorna um array de objetos', async () => {
      const response = await Album.getAllAlbums();

      expect(response).to.be.an('array');
    });
  });
});
