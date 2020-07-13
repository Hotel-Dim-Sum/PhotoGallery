const client = require('./index.js');

function getRoomData(roomId, callback) {
  "SELECT * FROM photos_by_room WHERE city = cityName AND image_id >= firstId AND image_id <= lastId"
}

function createNewPhoto(listName, isSaved, roomId, userId, callback) {
  "INSERT INTO photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved)
  VALUES (500002, 500002, 'Eum qui aut voluptas necessitatibus.', 'Darienhaven', 'MS', 3501323, 'https://hrsf128hotelphotos.s3-us-west-2.amazonaws.com/image1000.jpg', 'Placeat voluptatem natus', null, null, null)"
}

function changePhoto(isSaved, listId, roomId, callback) {
  "UPDATE photos_by_room SET image_url = imageUrl WHERE city = cityName AND image_id = imageId IF EXISTS"
}

function deletePhoto(listId, callback) {
  "DELETE FROM photos_by_room WHERE city = cityName AND image_id = imageId IF EXISTS"
}

module.exports = { getRoomData, createList, changeSaveStatus, deleteList };
