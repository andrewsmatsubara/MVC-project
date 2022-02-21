const Album = require('../service/album');

const getAllAlbums = async (_req, res) => {
  const result = await Album.getAllAlbums();

  return res.status(200).json(result);
}

module.exports = getAllAlbums;
