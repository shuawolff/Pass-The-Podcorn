DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS podcasts;


CREATE TABLE podcasts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    creator VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    episodes INTEGER NOT NULL,
    description TEXT,
    poster_url VARCHAR(255),
    trailer_url VARCHAR(255)
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    podcast_id INTEGER NOT NULL REFERENCES podcasts(id) ON DELETE CASCADE,
    upvote INTEGER DEFAULT 0,
    downvote INTEGER DEFAULT 0
)

