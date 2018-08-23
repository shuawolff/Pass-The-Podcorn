const db = require('../models/podcasts');

function showAll(req, res) {
  db.allPodcasts()
    .then(podcasts => {
      res.json(podcasts);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: '400', err });
    });
};

function showOne(req, res) {
  db.onePodcast(req.params.id)
    .then(podcast => {
      res.json(podcast);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: '400', err });
    });
};

function createPodcast(req, res) {
  db.createPodcast(req.body)
    .then(podcast => {
      res.json({
        message: 'ok',
        data: { podcast },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: '400', err });
    });
};

function updatePodcast(req, res) {
  db.updatePodcast(req.body, req.params.id)
    .then(podcast => {
      res.json(podcast)
    }
    )
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: '400', err });
    });
}

function deletePodcast(req, res) {
  db.deletePodcast(req.params.id)
    .then(podcast => {
      res.json({
        message: 'ok',
      });
    })
}



module.exports = {
  showAll,
  showOne,
  createPodcast,
  updatePodcast,
  deletePodcast
}