var express = require('express');
var router = express.Router();

//services
var userService = require('../services/User');

router.get('/', function(req, res, next) {
  res.json({ message: '欢迎使用justyeh的API服务！' });
});

router.get('/user', function(req, res, next) {
  userService.list(function(data){
    res.json(data)
  });
});
router.get('/user/:userID', function(req, res, next) {
  var userID = req.params.userID;
  userService.getUserById(userID,function(data){
    res.json(data)
  });
});

module.exports = router;
