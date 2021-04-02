const express = require('express');
const { topicksIndex } = require('../Controllers/MoviesController');

const router = express.Router();

router.get('/topicks', topicksIndex);

module.exports = router