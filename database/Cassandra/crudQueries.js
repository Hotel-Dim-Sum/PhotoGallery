const client = require('./index.js');

function getRoomData(cityName, firstId, lastId, callback) {
  let qString = 'SELECT * FROM photos_by_room WHERE city = ? AND image_id >= ? AND image_id <= ?';
  let variables = [cityName, firstId, lastId];
  client.execute(qString, variables, callback);
}

function createNewPhoto(roomId, userId, roomName, cityName, stateAbbr, imageId, imageUrl, imageDesc, listId, listName, isSaved, callback) {
  let qString = `INSERT INTO photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  let variables = [roomId, userId, roomName, cityName, stateAbbr, imageId, imageUrl, imageDesc, listId, listName, isSaved];
  client.execute(qString, variables, callback);
}

function changePhoto(imageUrl, cityName, imageId, callback) {
  let qString = 'UPDATE photos_by_room SET image_url = ? WHERE city = ? AND image_id = ? IF EXISTS';
  let variables = [imageUrl, cityName, imageId];
  client.execute(qString, variables, callback);
}

function deletePhoto(cityName, imageId, callback) {
  let qString = 'DELETE FROM photos_by_room WHERE city = ? AND image_id = ? IF EXISTS';
  let variables = [cityName, imageId];
  client.execute(qString, variables, callback);
}

module.exports = { getRoomData, createNewPhoto, changePhoto, deletePhoto };
