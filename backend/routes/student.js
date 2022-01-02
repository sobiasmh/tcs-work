var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Class = require('../models/class');
var Quiz = require('../models/quiz');

var Admin = require('../models/admin');
var Student = require('../models/student');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome to Student Dashboard');
});


router.post('/addMaterial', function(req, res, next) {
  Class.create(req.body)
      .then((result) => {
          console.log('Material has been Added ', result);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(result);
      }, (err) => next(err))
      .catch((err) => next(err));
});

router.get('/Material', function(req, res, next) {
    Class.find("Material").sort('Material').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
  });

  
module.exports = router;
