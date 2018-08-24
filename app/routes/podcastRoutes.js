const express = require('express');
const podcastsController = require('../controllers/podcastsController');

const podcastRouter = express.Router();

podcastRouter.route('/')
  .get(podcastsController.showAll)
  .post(podcastsController.createPodcast);

podcastRouter.route('/:id')
  .get(podcastsController.showOne)
  .put(podcastsController.updatePodcast)
  .delete(podcastsController.deletePodcast);

module.exports = podcastRouter;
