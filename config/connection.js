
// Connect pg-promise to your database here

const pgp = require('pg-promise')();

const config = require('./dbconfig');

const db = pgp(config);

module.exports = {
  db,
  pgp,
};
