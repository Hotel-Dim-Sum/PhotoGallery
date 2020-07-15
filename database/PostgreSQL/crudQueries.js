const client = require('./index.js');

function getRoomData(roomId, callback) {
  let qString = `
    SELECT rooms.*, roomImages.image_id, roomImages.image_url, roomImages.image_description, users.*, userLists.list_id, userLists.list_name, userLists.is_saved
    FROM rooms
    INNER JOIN roomImages
    ON rooms.room_id = roomImages.room_id
    LEFT JOIN userLists
    ON roomImages.room_id = userLists.room_id
    LEFT JOIN users
    ON userLists.user_id = users.user_id
    WHERE rooms.room_id = ?
  `;
  client.query(qString, [roomId], callback);
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
