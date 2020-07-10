let faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const images = (start, end, imageStart) => {
  let records = [];
  let imageId = imageStart;
  for (let i = start; i <= end; i++) {
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
      let record = {
        image_id: imageId,
        image_url: `https://hrsf128hotelphotos.s3-us-west-2.amazonaws.com/image${index}.jpg`,
        image_description: faker.lorem.sentence(5, false),
        room_id: i
      }
      imageId++;
      records.push(record);
    }
  }
  return records;
}

const csvWriter = createCsvWriter({
  path: './database/PostgreSQL/CSV/roomImages.csv',
  header: [
      {id: 'image_id', title: 'image_id'},
      {id: 'image_url', title: 'image_url'},
      {id: 'image_description', title: 'image_description'},
      {id: 'room_id', title: 'room_id'}
  ]
});

let imageDump = images(1, 10, 1);

csvWriter.writeRecords(imageDump)
    .then(() => {
        console.log('...Done');
    });
