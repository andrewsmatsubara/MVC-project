const connection = require('./connection');

const getAllAlbums = async () => {
  const query = 'SELECT * FROM album;'
  const [result] = await connection.execute(query);

  return result;
};

module.exports = { getAllAlbums };
