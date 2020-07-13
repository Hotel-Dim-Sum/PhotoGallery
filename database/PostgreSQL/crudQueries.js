const client = require('./index.js');

function getRoomData(roomId, callback) {
  client.query('SELECT * FROM rooms NATURAL JOIN roomImages WHERE rooms.room_id = ?', [roomId], (err, roomResponse) => {
    if (err) callback(err);
    client.query('SELECT * FROM users NATURAL JOIN userlists WHERE userlists.room_id = ?', [roomId], (err, listResponse) => {
      if (err) callback(err);
      let fullResponse = roomResponse.concat(listResponse);
      callback(null, fullResponse);
    });
  });
}

function createList(listName, isSaved, roomId, userId, callback) {
  let qString = 'INSERT INTO userlists (list_name, is_saved, room_id, user_id) VALUES (?, ?, ?, ?)';
  let values = [listName, isSaved, roomId, userId];
  client.query(qString, values, callback);
}

function changeSaveStatus(isSaved, listId, roomId, callback) {
  client.query('UPDATE userlists SET is_saved = ? WHERE list_id = ? AND room_id = ?', [isSaved, listId, roomId], callback);
}

function deleteList(listId, callback) {
  client.query('DELETE FROM userlists WHERE list_id = ?', [listId], callback);
}

module.exports = { getRoomData, createList, changeSaveStatus, deleteList };
