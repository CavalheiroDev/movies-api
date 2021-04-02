const mongoose = require('mongoose');
require('../Models/Movie.js');
const Topicks = mongoose.model('topicks');

function topicksIndex(req, res, next) {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/movies',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => {
      Topicks.find(null, { "_id": 0, "rank": 1, "name": 1, "pageDetails": 1 }).sort({ rank: 1 }).exec()
        .then((topicks) => {
          res.status(200).send({
            title: 'Top 100 filmes mais populares do momento',
            topicks
          });
        }).catch((error) => {
          console.log(error);
          res.status(500).send({ 'Alerta': 'Deu pau no servidor!!' });
        })
    })
    .catch((error) => {
      console.log('Calma lá né querido!', error)
    });
}

module.exports = {
  topicksIndex
}