CREATE KEYSPACE hotelphotogallery WITH replication =
  {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE hotelphotogallery;

CREATE TYPE photo (
  image_id int,
  image_url text,
  image_description text
);

CREATE TYPE savedList (
  list_id int,
  list_name text,
  saved boolean
);

CREATE TABLE hotelphotogallery.room (
  room_id int,
  user_id int,
  room_name text,
  city text,
  state text,
  room_photos list<frozen<photo>>,
  save_status list<frozen<savedList>>,
  primary key (city, room_id)
);
