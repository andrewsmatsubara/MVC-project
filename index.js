require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const getAllAlbums = require('./controller/album');
const app = express();


app.use(bodyParser.json());

app.get('/album', getAllAlbums);

app.listen(process.env.PORT, () => {
  console.log(`Ouvindo na porta ${ process.env.PORT }`);
});
