var express = require('express');
var searchController = require('../controllers/searchController');
var router = express.Router();

router.get('/:query', function(req, res, next){
  searchController.getPhotosForSearch(req, res, next);
});

module.exports = router;