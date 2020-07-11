DROP DATABASE IF EXISTS hotelphotogallery;

CREATE DATABASE hotelphotogallery;

\connect hotelphotogallery;

CREATE TABLE rooms (
  room_id serial primary key NOT NULL,
  room_name varchar(80) NOT NULL,
  city varchar(80) NOT NULL,
  state varchar(3) NOT NULL
);

CREATE TABLE roomImages (
  image_id serial primary key NOT NULL,
  image_url varchar NOT NULL,
  image_description varchar(100),
  room_id int references rooms(room_id) NOT NULL
);

CREATE TABLE users (
  user_id serial primary key NOT NULL,
  username varchar(20) NOT NULL
);

CREATE TABLE userLists (
  list_id serial primary key NOT NULL,
  list_name varchar(100) NOT NULL,
  is_saved boolean NOT NULL,
  room_id int references rooms(room_id) NOT NULL,
  user_id int references users(user_id) NOT NULL
);
