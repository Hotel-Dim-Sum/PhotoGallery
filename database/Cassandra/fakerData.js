const faker = require('faker');

const roomNameGen = () => {
  let output = [];
  for (let i = 0; i < 1000; i++) {
    output.push(faker.lorem.sentence(4, false));
  }
  return output;
};

const cityGen = () => {
  let output = [];
  for (let i = 0; i < 1000; i++) {
    output.push(faker.address.city());
  }
  return output;
};

const stateGen = () => {
  let output = [];
  for (let i = 0; i < 1000; i++) {
    output.push(faker.address.stateAbbr(false));
  }
  return output;
};

const descriptionGen = () => {
  let output = [];
  for (let i = 0; i < 1000; i++) {
    output.push(faker.lorem.sentence(5, false));
  }
  return output;
};

const listNameGen = () => {
  let output = [];
  for (let i = 0; i < 1000; i++) {
    output.push(faker.company.bs());
  }
  return output;
};

const savedGen = () => {
  let output = [];
  for (let i = 0; i < 1000; i++) {
    output.push(faker.random.boolean());
  }
  return output;
};

let exampleRooms = roomNameGen();
let exampleCities = cityGen();
let exampleStates = stateGen();
let exampleDescriptions = descriptionGen();
let exampleLists = listNameGen();
let exampleSaved = savedGen();

module.exports = {
  exampleRooms,
  exampleCities,
  exampleStates,
  exampleDescriptions,
  exampleLists,
  exampleSaved
};
