const connection = require('./connection');

const getAllAlbums = async () => {
  const query = 'SELECT * FROM album;'
  const result = await connection.execute(query);

  console.log(result);

  return result;
};

module.exports = { getAllAlbums };
