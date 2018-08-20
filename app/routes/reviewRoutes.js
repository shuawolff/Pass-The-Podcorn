const express = require('express');
const reviewsController = require('../controllers/reviewsController');

const reviewRoutes = express.Router();

reviewRoutes.get('/podcast/:id', reviewsController.showAll);
reviewRoutes.get('/:id', reviewsController.showOne);
reviewRoutes.post('/', reviewsController.create);
reviewRoutes.put('/:id', reviewsController.update);
reviewRoutes.delete('/:id', reviewsController.destroy);

module.exports = reviewRoutes;