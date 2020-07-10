/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
const express = require('express');
const app = express();
const port = 3004;
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const Controllers = require('./Controllers.js');

app.use(cors());
app.use(bodyParser.json());
app.use('/photogallery', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/:roomId/photo-gallery', (req, res) => {
  Controllers.getPhotos(req, res);
});

app.post('/api/:roomId/photo-gallery/save-status', (req, res) => {
  Controllers.postSaveToList(req, res);
});

app.put('/api/:roomId/photo-gallery/save-status', (req, res) => {
  Controllers.updateSaveToList(req, res);
});

app.delete('/api/:roomId/photo-gallery', Controllers.deletePhoto);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
