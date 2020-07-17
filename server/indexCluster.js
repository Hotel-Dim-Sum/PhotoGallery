// const newRelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const Controllers = require('./Controllers.js');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const app = express();
const port = 3004;

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
  }
} else {
  app.use(cors());
  app.use(bodyParser.json());
  app.use('/photogallery', express.static(path.join(__dirname, '../client/dist')));

  app.get('/api/:roomId/photo-gallery', Controllers.getRoomData);

  app.post('/api/:roomId/photo-gallery/save-status', Controllers.createList);

  app.put('/api/:roomId/photo-gallery/save-status', Controllers.changeSaveStatus);

  app.delete('/api/:roomId/photo-gallery', Controllers.deleteList);

  app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
}
