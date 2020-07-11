let faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const dataGen = (start, end, imageCounter) => {
  let records = [];
  for (let i = start; i <= end; i++) {
    // Add for loop for images
    let imageId = imageCounter;
    let count = Math.floor(Math.random() * (10 - 5)) + 5;
    let imageRecords = [];
    for (let j = 1; j <= count; j++) {
      let index = Math.floor(Math.random() * 1000) + 1;
      if (index < 10) {
        index = '000' + index;
      } else if (index < 100) {
        index = '00' + index;
      } else if (index < 1000) {
        index = '0' + index;
      }
      let imageRecord = {
        image_id: imageId,
        image_url: `https://hrsf128hotelphotos.s3-us-west-2.amazonaws.com/image${index}.jpg`,
        image_description : faker.lorem.sentence(5, false)
      };
      imageId++;
      imageRecords.push(imageRecord);
    }
    let listRecord = [
      {
        list_id: i,
        list_name: faker.company.bs(),
        saved: faker.random.boolean()
      }
    ];
    let record = {
      room_id: i,
      user_id: i,
      room_name: faker.lorem.sentence(4, false),
      city: faker.address.city(),
      state: faker.address.stateAbbr(false),
      room_photos: JSON.stringify(imageRecords),
      save_status: JSON.stringify(listRecord)
    }
    records.push(record);
  }
  return records;
}

const csvWriter = createCsvWriter({
  path: './database/Cassandra/CSV/room.csv',
  header: [
    {id: 'room_id', title: 'room_id'},
    {id: 'user_id', title: 'user_id'},
    {id: 'room_name', title: 'room_name'},
    {id: 'city', title: 'city'},
    {id: 'state', title: 'state'},
    {id: 'room_photos', title: 'room_photos'},
    {id: 'save_status', title: 'save_status'}
  ]
});

let dataDump = dataGen(1, 10, 1);

csvWriter.writeRecords(dataDump)
  .then(() => {
    console.log('...Done');
  });
