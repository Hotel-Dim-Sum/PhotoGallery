const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'josef',
  database: 'hotelphotogallery',
  port: 5432
});

client.connect();

module.exports = client;