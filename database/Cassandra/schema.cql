CREATE KEYSPACE hotelPhotoGallery WITH replication =
  {'class': 'SimpleStrategy', 'replication_factor' : 1};

CREATE TYPE photo (
  image_id int,
  imageUrl text,
  description text
);

CREATE TYPE savedList (
  list_id int,
  name text,
  saved boolean
);

CREATE TABLE hotelPhotoGallery.room (
  room_id int,
  user_id int,
  name text,
  city text,
  state text,
  room_photos list<frozen<photo>>,
  save_status list<frozen<savedList>>
  primary key (city, room_id)
);
