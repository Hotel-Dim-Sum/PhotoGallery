CREATE DATABASE hotelPhotoGallery;

\connect hotelPhotoGallery;

CREATE TABLE rooms (
  room_id int primary key NOT NULL,
  room_name varchar(80) NOT NULL,
  city varchar(80) NOT NULL,
  state varchar(80) NOT NULL
);

CREATE TABLE roomImages (
  image_id int primary key NOT NULL,
  imageUrl varchar NOT NULL,
  description varchar(100),
  room_id int references userRoom(room_id) NOT NULL
);

CREATE TABLE userLists (
  list_id int primary key NOT NULL,
  name varchar(100) NOT NULL,
  saved boolean NOT NULL,
  room_id int references rooms(room_id) NOT NULL,
  user_id int references users(user_id) NOT NULL
);

CREATE TABLE users (
  user_id int primary key NOT NULL,
  name varchar(20) NOT NULL
);
