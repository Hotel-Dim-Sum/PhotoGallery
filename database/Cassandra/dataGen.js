const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { exampleRooms, exampleCities, exampleStates, exampleDescriptions, exampleLists, exampleSaved } = require('./fakerData.js');

const dataGen = (start, end, imageStart, listStart) => {
  let records = [];
  let imageCount = imageStart;
  let listCount = listStart;
  for (let i = start; i <= end; i++) {
    let fakeIndex = Math.floor(Math.random() * (1000));
    let roomName = exampleRooms[fakeIndex];
    let fakeCity = exampleCities[fakeIndex];
    let fakeState = exampleStates[fakeIndex];
    let count = Math.floor(Math.random() * (10 - 5)) + 5;
    for (let j = 1; j <= count; j++) {
      let index = Math.floor(Math.random() * 1000) + 1;
      if (index < 10) {
        index = '000' + index;
      } else if (index < 100) {
        index = '00' + index;
      } else if (index < 1000) {
        index = '0' + index;
      }
      let url = `https://hrsf128hotelphotos.s3-us-west-2.amazonaws.com/image${index}.jpg`;
      let description = exampleDescriptions[fakeIndex];
      if (Math.random() < 0.5) {
        let record = {
          room_id: i,
          user_id: i,
          room_name: roomName,
          city: fakeCity,
          state: fakeState,
          image_id: imageCount,
          image_url: url,
          image_description: description,
          list_id: listCount,
          list_name: exampleLists[fakeIndex],
          saved: exampleSaved[fakeIndex]
        }
        records.push(record);
        listCount++;
        imageCount++;
        continue;
      }
      let record = {
        room_id: i,
        user_id: i,
        room_name: roomName,
        city: fakeCity,
        state: fakeState,
        image_id: imageCount,
        image_url: url,
        image_description: description
      };
      records.push(record);
      imageCount++;
    }
  }
  return records;
};

const csvWriter = createCsvWriter({
  path: './database/Cassandra/CSV/room.csv',
  header: [
    {id: 'room_id', title: 'room_id'},
    {id: 'user_id', title: 'user_id'},
    {id: 'room_name', title: 'room_name'},
    {id: 'city', title: 'city'},
    {id: 'state', title: 'state'},
    {id: 'image_id', title: 'image_id'},
    {id: 'image_url', title: 'image_url'},
    {id: 'image_description', title: 'image_description'},
    {id: 'list_id', title: 'list_id'},
    {id: 'list_name', title: 'list_name'},
    {id: 'saved', title: 'saved'}
  ]
});

let dataDump = dataGen(9500001, 10000000, 66500325, 33245072);

csvWriter.writeRecords(dataDump)
  .then(() => {
    console.log('...Done');
  });
