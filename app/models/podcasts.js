const { db } = require('../config/conn');

function allPodcasts() {
    return db.query(`
    SELECT * 
    FROM podcasts
    `)
};

function onePodcast(id) {
    return db.one(`
    SELECT *
    FROM podcasts
    WHERE id = $1
    `, id)
}

module.exports = {
    allPodcasts,
    onePodcast
}