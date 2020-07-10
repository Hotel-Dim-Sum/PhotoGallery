# Hotel Dim Sum API Documentation

## Table of Contents

1. [GET Room Photos](#GET-Room-Photos)
1. [POST Saved List](#POST-Saved-List)
1. [PUT Saved List](#PUT-Saved-List)
1. [DELETE Room](#DELETE-Room)

## GET Room Photos
This request uses the endpoint '/api/:roomId/photo-gallery'. From within here the roomId is passed in the path params. This is then used to query the database and return all information associated with this one room.

On a successfully call this will return a status of 200 and for a failure, it will return 400.

The request body is empty for this route.

If an error is found, that will be sent. However, upon a successful call, the response JSON object will be in the following format:
{
  user_id: Number,
  room_id: Number,
  room_photos: [{ imageUrl: String, description: String }],
  save_status: [{
    name: String,
    saved: Boolean,
  }],
}

## POST Saved List
This request uses the endpoint '/api/:roomId/photo-gallery/save-status'. From within here the roomId is passed in the path params. This is then used to query the database and create a new saved record that is associated with the room.

On a successfully call this will return a status of 201 and for a failure, it will return 400.

The request body for this route contains the following, which is in a JSON string format:
  name - This is the name of the list that was created (String)
  saved - This is the state, which reflects if it is saved or not (Boolean)

If an error is found, that will be sent. Outside of that the response JSON object is:
{
  n: Number,
  nModified: Number,
  ok: Number
}

However this is ignored, but triggers a GET request, which returns data in the following shape (JSON):
{
  user_id: Number,
  room_id: Number,
  room_photos: [{ imageUrl: String, description: String }],
  save_status: [{
    name: String,
    saved: Boolean,
  }],
}

## PUT Saved List
This request uses the endpoint '/api/:roomId/photo-gallery/save-status'. From within here the roomId is passed in the path params. This is then used to query the database and update a record that is associated with the room and id.

On a successfully call this will return a status of 200 and for a failure, it will return 400.

The request body for this route contains the following, which is in a JSON string format:
  id - This is the Id for the list that is to be updated (Mongo ID)
  name - This is the name of the list that was modified (String)
  saved - This is the state, which reflects if it is saved or not (Boolean)

If an error is found, that will be sent. Outside of that the response JSON object is:
{
  n: Number,
  nModified: Number,
  ok: Number
}

However this is ignored, but triggers a GET request, which returns data in the following shape (JSON):
{
  user_id: Number,
  room_id: Number,
  room_photos: [{ imageUrl: String, description: String }],
  save_status: [{
    name: String,
    saved: Boolean,
  }],
}

## DELETE List Entry
This request uses the endpoint '/api/:roomId/photo-gallery'. From within here the roomId is passed in the path params. This is then used to query the database and delete the room.

On a successfully call this will return a status of 200 and for a failure, it will return 400.

The request body is empty for this route.

If an error is found, that will be sent. Outside of that the response JSON object is ignored but has the following shape:
{
  n: Number,
  ok: Number
}
