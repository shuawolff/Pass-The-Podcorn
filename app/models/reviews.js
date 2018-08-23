const { db } = require('../config/conn');

function allPodReviews(id) {
    return db.query(`
    SELECT * 
    FROM reviews
    WHERE podcast_id = $1
    `, id)
};

function onePodReview(id) {
    return db.one(`
    SELECT *
    FROM reviews
    WHERE review_id = $1
    `, id)
}

function createPodReviews(review, id) {
    return db.one(
        `
        INSERT INTO reviews (username, content, podcast_id)
        VALUES ($/username/, $/content/, ${id})
        RETURNING *
        `, review);
};

function updatePodReviews(review, id) {
    return db.one(
        `
               UPDATE reviews 
               SET username = $/username/, content = $/content/
               WHERE review_id = ${id}
               RETURNING *
             `, review
    );
};

function destroyPodReviews(id) {
    return db.none(
        `
                   DELETE FROM reviews
                   WHERE review_id = $1
                 `, id
    );
};

module.exports = {
    allPodReviews,
    onePodReview,
    createPodReviews,
    updatePodReviews,
    destroyPodReviews
}