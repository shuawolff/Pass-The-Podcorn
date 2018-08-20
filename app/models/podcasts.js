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

function createPodcast(podcast) {
    return db.one(`
    INSERT INTO podcasts (title, creator, genre, episodes, description, poster_url, trailer_url)
    VALUES($/title/, $/creator/, $/genre/, $/episodes/, $/description/, $/poster_url/, $/trailer_url/)
    RETURNING *
    `, podcast)
}

function updatePodcast(data, id) {
    return db.one(`
    UPDATE podcasts
    SET title = $/title/, creator = $/creator/, genre = $/genre/, episodes = $/episodes/, description = $/description/, poster_url = $/poster_url/, trailer_url = $/trailer_url/
    WHERE id = ${id}
    RETURNING *
    `, data)
}

function deletePodcast(id) {
    return db.none(`
    DELETE FROM podcasts
    WHERE id = $1
    `, id)
}

module.exports = {
    allPodcasts,
    onePodcast,
    createPodcast,
    updatePodcast,
    deletePodcast
}