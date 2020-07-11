let faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const userData = (start, end) => {
  let records = [];
  for (let i = start; i <= end; i++) {
    let record = {
      user_id: i,
      username: faker.name.findName()
    }
    records.push(record);
  }
  return records;
}

const csvWriter = createCsvWriter({
  path: './database/PostgreSQL/CSV/users.csv',
  header: [
    {id: 'user_id', title: 'user_id'},
    {id: 'username', title: 'username'}
  ]
});

let userDump = userData(1, 100000);

csvWriter.writeRecords(userDump)
  .then(() => {
    console.log('...Done');
  });
