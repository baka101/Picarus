var accessRestriction = require('../utils/auth.js').accessRestriction;
var express = require('express');
var photoController = require('../controllers/photoController');
var router = express.Router();

router.post('/', accessRestriction, function(req,res,next){
  if (req.body.photo) photoController.addMobilePhoto(req,res,next);
  else photoController.addPhoto(req, res, next);
});

router.get('/', function(req,res,next){
  photoController.getAllPhotos(req, res, next);
});

router.post('/likes', accessRestriction, function(req, res, next){
  photoController.handlePhotoLike(req, res, next);
});

router.post('/avatars/', accessRestriction, function(req,res,next){
  photoController.addAvatar(req, res, next);
});

router.post('/check', function(req, res, next){
  photoController.getPhotoLikes(req, res, next);
});

module.exports = router;