const pgp = require('pg-promise')();

const opts = {
    database: 'podcast_db'
};

const db = pgp(opts);

module.exports = {
    pgp,
    db
};