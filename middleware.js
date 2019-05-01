var express = require('express');

var rout = express.Router();


var postTest = function(req, res, next) {
  next();
}

exports.postTest = postTest;