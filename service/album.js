const Album = require('../model/album');

const getAllAlbums = async () => {
  const result = await Album.getAllAlbums();

  return result;
}

module.exports = { getAllAlbums };
