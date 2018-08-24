const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');

// Setting up port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up logger
app.use(logger('dev'));

app.use(cors());

// Setup podcast routes
const podcastRoutes = require('./routes/podcastRoutes');

app.use('/podcasts', podcastRoutes);

const reviewRoutes = require('./routes/reviewRoutes');

app.use('/reviews', reviewRoutes);

// Redirect all users to podcasts
app.get('/', (req, res) => {
  res.redirect('/podcasts');
});

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Oops! Not found.' });
});
