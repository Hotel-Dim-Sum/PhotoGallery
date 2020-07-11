let faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const list = (start, end) => {
  let records = [];
  for (let i = start; i <= end; i++) {
    let record = {
      list_id: i,
      list_name: faker.company.bs(),
      is_saved: faker.random.boolean(),
      room_id: Math.floor(Math.random() * (1000 - 1)) + 1,
      user_id: Math.floor(Math.random() * (1000 - 1)) + 1
    }
    records.push(record);
  }
  return records;
}

const csvWriter = createCsvWriter({
  path: './database/PostgreSQL/CSV/userLists.csv',
  header: [
    {id: 'list_id', title: 'list_id'},
    {id: 'list_name', title: 'list_name'},
    {id: 'is_saved', title: 'is_saved'},
    {id: 'room_id', title: 'room_id'},
    {id: 'user_id', title: 'user_id'}
  ]
});

let listDump = list(1, 10);

csvWriter.writeRecords(listDump)
  .then(() => {
    console.log('...Done');
  });
