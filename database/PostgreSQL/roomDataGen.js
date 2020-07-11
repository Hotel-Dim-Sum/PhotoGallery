let faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const roomData = (start, end) => {
  let records = [];
  for (let i = start; i <= end; i++) {
    let record = {
      room_id: i,
      room_name: faker.lorem.sentence(4, false),
      city: faker.address.city(),
      state: faker.address.stateAbbr(false)
    }
    records.push(record);
  }
  return records;
}

const csvWriter = createCsvWriter({
  path: './database/PostgreSQL/CSV/rooms.csv',
  header: [
    {id: 'room_id', title: 'room_id'},
    {id: 'room_name', title: 'room_name'},
    {id: 'city', title: 'city'},
    {id: 'state', title: 'state'}
  ]
});

let roomDump = roomData(1, 10);

csvWriter.writeRecords(roomDump)
  .then(() => {
    console.log('...Done');
  });
