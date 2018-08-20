const db =  require('../models/podcasts');

function showAll(req, res) {
    db.allPodcasts()
    .then(podcasts => {
        res.json({
            message: 'ok',
            data: { podcasts },
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
    });
};

function showOne(req, res) {
    db.onePodcast(req.params.id)
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

module.exports = {
    showAll,
    showOne
}