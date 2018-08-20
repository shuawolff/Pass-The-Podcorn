const express = require('express');
const podcastsController = require('../controllers/podcastsController');

const podcastRoutes = express.Router();

podcastRoutes.get('/', podcastsController.showAll);
podcastRoutes.get('/:id', podcastsController.showOne);

module.exports = podcastRoutes;