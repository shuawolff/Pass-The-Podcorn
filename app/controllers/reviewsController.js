const db =  require('../models/reviews');

function showAll(req, res) {
    db.allPodReviews(req.params.id)
    .then(podReviews => {
            res.json(podReviews);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
    });
};

function showOne(req, res) {
    db.onePodReview(req.params.id)
    .then(podcast => {
        res.json({
            message: 'ok',
            data: { podcast },
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
    });
};

function create(req, res) {
    db.createPodReviews(req.body, req.params.id)
      .then(podcast => {
        res.json(podcast);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
      });
  };

  function update(req, res) {
    db.updatePodReviews(req.body, req.params.id) 
    .then(podcast => {
        res.json({message: 'ok', data: { podcast }});
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  };

  function destroy(req, res) {
       db.destroyPodReviews(req.params.id)
         .then(() => {
           res.json({message: 'review deleted'});
         })
         .catch(err => {
           console.log(err);
           res.status(400).json(err);
         });
     };

module.exports = {
    showAll,
    showOne,
    create,
    update,
    destroy
}