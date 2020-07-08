# Hotel Dim Sum API Documentation

## Table of Contents

1. [GET Requests](#GET-Requests)
1. [POST Requests](#POST-Requests)
1. [PUT Requests](#PUT-Requests)
1. [DELETE Requests](#DELETE-Requests)

## GET Requests
This request uses the endpoint '/api/:roomId/photo-gallery'. From within here the roomId is passed in the path params. This is then used to query the database and return all information associated with this one room.

The request body is empty for this route.

If an error is found, that will be sent. However, upon a successful call, the response object will be in the following format:
{
  user_id: Number,
  room_id: Number,
  room_photos: [{ imageUrl: String, description: String }],
  save_status: [{
    name: String,
    saved: Boolean,
  }],
}

## POST Requests
This request uses the endpoint '/api/:roomId/photo-gallery/save-status'. From within here the roomId is passed in the path params. This is then used to query the database and create a new saved record that is associated with the room.

The request body for this route contains the following:
  name - This is the name of the list that was created
  saved - This is the state, which reflects if it is saved or not

If an error is found, that will be sent. Outside of that the response object is:
{
  n: Number,
  nModified: Number,
  ok: Number (1 = pass)
}

However this is ignored, but triggers a GET request, which returns data in the following shape:
{
  user_id: Number,
  room_id: Number,
  room_photos: [{ imageUrl: String, description: String }],
  save_status: [{
    name: String,
    saved: Boolean,
  }],
}

## PUT Requests
This request uses the endpoint '/api/:roomId/photo-gallery/save-status'. From within here the roomId is passed in the path params. This is then used to query the database and update a record that is associated with the room.

The request body for this route contains the following:
  id - This is the Id for the list that is to be updated
  name - This is the name of the list that was modified
  saved - This is the state, which reflects if it is saved or not

If an error is found, that will be sent. Outside of that the response object is:
{
  n: Number,
  nModified: Number,
  ok: Number (1 = pass)
}

However this is ignored, but triggers a GET request, which returns data in the following shape:
{
  user_id: Number,
  room_id: Number,
  room_photos: [{ imageUrl: String, description: String }],
  save_status: [{
    name: String,
    saved: Boolean,
  }],
}

## DELETE Requests
This request uses the endpoint '/api/:roomId/photo-gallery'. From within here the roomId is passed in the path params. This is then used to query the database and return all information associated with this one room.

The request body is empty for this route.

If an error is found, that will be sent. Outside of that the response object is ignored but has the following shape:
{
    n: Number,
    ok: Number
}
