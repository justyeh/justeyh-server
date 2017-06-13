var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('叶文祥的前端博客');
});

module.exports = router;
