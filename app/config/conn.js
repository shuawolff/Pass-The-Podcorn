const pgp = require('pg-promise')();

const opts = process.env.DATABASE_URL || {
  database: 'podcast_db',
};

const db = pgp(opts);

module.exports = {
  pgp,
  db,
};
