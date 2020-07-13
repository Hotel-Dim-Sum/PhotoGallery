DROP KEYSPACE hotelphotogallery;

CREATE KEYSPACE hotelphotogallery WITH replication =
  {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE hotelphotogallery;

CREATE TABLE hotelphotogallery.photos_by_room (
  room_id int,
  user_id int,
  room_name text,
  city text,
  state text,
  image_id int,
  image_url text,
  image_description text,
  list_id int,
  list_name text,
  saved boolean,
  primary key (city, image_id)
);

COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room1.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room2.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room3.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room4.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room5.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room6.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room7.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room8.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room9.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room10.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room11.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room12.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room13.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room14.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room15.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room16.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room17.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room18.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room19.csv' with header=true and delimiter =',';
COPY photos_by_room (room_id, user_id, room_name, city, state, image_id, image_url, image_description, list_id, list_name, saved) FROM '/Users/josef/Documents/HackReactor/HRSF128/hotel-dim-sum/PhotoGallery/database/Cassandra/CSV/room20.csv' with header=true and delimiter =',';
