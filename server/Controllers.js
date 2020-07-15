const Models = require('./Models.js');

function getRoomData(req, res) {
  const { roomId } = req.params;
  console.log('Hit: ', roomId);
  Models.getRoomData(roomId, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

function createList(req, res) {
  const { roomId } = req.params;
  const { listName, isSaved, userId } = req.body;
  Models.createList(listName, isSaved, roomId, userId, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(data);
    }
  });
}

function changeSaveStatus(req, res) {
  const { roomId } = req.params;
  const { isSaved, listId } = req.body;
  Models.changeSaveStatus(isSaved, listId, roomId, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204).end();
    }
  });
}

function deleteList(req, res) {
  const { listId } = req.body;
  Models.deleteList(listId, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(204).end();
    }
  });
}

module.exports = { getRoomData, createList, changeSaveStatus, deleteList };
