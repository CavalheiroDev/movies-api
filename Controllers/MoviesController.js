const mongoose = require('mongoose');
require('../Models/Movie.js');
const Movie = mongoose.model('movies');

function topicksIndex(req, res, next) {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/moviesTopicks',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => {
      Movie.find(null, { "_id": 0, "rank": 1, "name": 1, "image": 1 }).sort({ rank: 1 }).exec()
        .then((movies) => {
          res.status(200).json({
            title: 'Top 100 filmes mais populares do momento',
            movies
          });
        }).catch((error) => {
          console.log(error);
          res.status(500).json('Deu pau no servidor!!');
        })
    })
    .catch((error) => {
      console.log('Calma lá né querido!', error)
    });
}

module.exports = {
  topicksIndex
}