const client = require('../database/PostgreSQL/index.js');

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
    WHERE rooms.room_id = $1
  `;
  client.query(qString, [roomId], (err, response) => {
    if (err) callback(err);

    let output = {
      user_id: response.rows[0].user_id || null,
      room_id: response.rows[0].room_id
    };
    let room_photos = [];
    let save_status = [];
    for (let i = 0; i < response.rows.length; i++) {
      let currentPhoto = response.rows[i];
      let photoObj = {
        image_id: currentPhoto.image_id,
        imageUrl: currentPhoto.image_url,
        description: currentPhoto.image_description
      };
      room_photos.push(photoObj);
      if (currentPhoto.list_id) {
        let listObj = {
          list_id: currentPhoto.list_id,
          name: currentPhoto.list_name,
          saved: currentPhoto.is_saved
        }
        save_status.push(listObj);
      }
    }
    output.room_photos = room_photos;
    output.save_status = save_status;
    callback(null, output);
  });
}

function createList(listName, isSaved, roomId, userId, callback) {
  let qString = 'INSERT INTO userlists (list_name, is_saved, room_id, user_id) VALUES ($1, $2, $3, $4)';
  let values = [listName, isSaved, roomId, userId];
  client.query(qString, values, callback);
}

function changeSaveStatus(isSaved, listId, roomId, callback) {
  client.query('UPDATE userlists SET is_saved = $1 WHERE list_id = $2 AND room_id = $3', [isSaved, listId, roomId], callback);
}

function deleteList(listId, callback) {
  client.query('DELETE FROM userlists WHERE list_id = $1', [listId], callback);
}

module.exports = { getRoomData, createList, changeSaveStatus, deleteList };
