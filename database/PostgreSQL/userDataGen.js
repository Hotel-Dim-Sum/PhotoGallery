let faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const userData = (n) => {
  let records = [];
  for (let i = 1; i <= n; i++) {
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

let userDump = userData(10);

csvWriter.writeRecords(userDump)
    .then(() => {
        console.log('...Done');
    });
