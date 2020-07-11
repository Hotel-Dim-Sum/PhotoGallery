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
  username varchar(50) NOT NULL
);

CREATE TABLE userLists (
  list_id serial primary key NOT NULL,
  list_name varchar(100) NOT NULL,
  is_saved boolean NOT NULL,
  room_id int references rooms(room_id) NOT NULL,
  user_id int references users(user_id) NOT NULL
);

COPY users FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/users1.csv' CSV header;
COPY rooms FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/rooms1.csv' CSV header;
COPY rooms FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/rooms2.csv' CSV header;
COPY roomImages FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/roomImages1.csv' CSV header;
COPY roomImages FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/roomImages2.csv' CSV header;
COPY roomImages FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/roomImages3.csv' CSV header;
COPY roomImages FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/roomImages4.csv' CSV header;
COPY roomImages FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/roomImages5.csv' CSV header;
COPY roomImages FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/roomImages6.csv' CSV header;
COPY roomImages FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/roomImages7.csv' CSV header;
COPY roomImages FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/roomImages8.csv' CSV header;
COPY roomImages FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/roomImages9.csv' CSV header;
COPY roomImages FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/roomImages10.csv' CSV header;
COPY userLists FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/PostgreSQL/CSV/userLists1.csv' CSV header;
