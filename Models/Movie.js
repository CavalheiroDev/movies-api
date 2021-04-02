const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovieSchema = new Schema({
  rank: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  pageDetails: {
    type: String,
    required: true,
  },
  topick: {
    type: Boolean,
    required: true,
  },
});

mongoose.model('topicks', MovieSchema);
