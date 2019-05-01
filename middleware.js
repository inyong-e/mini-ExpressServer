var express = require('express');

var rout = express.Router();


var postTest = function(req, res, next) {
  if (!req.session.user) {
    req.session.user = {}
  }
  
  // count the views
  req.session.user['a'] = 1;
  
  next()
}

exports.postTest = postTest;