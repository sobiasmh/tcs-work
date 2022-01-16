var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Class = require('../models/class');

var Admin = require('../models/admin');
var Student = require('../models/student');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/addQuiz', function(req, res, next) {
    Class.create(req.body)
        .then((result) => {
            console.log('Quiz has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
        }, (err) => next(err))
        .catch((err) => next(err));
  });

  router.get('/quiz', function(req, res, next) {
    Class.find("quizes").sort('quizes').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
  });

  router.get('/quiz/:id', function(req, res, next) {
    Class.findById(req.params.id)
        .then((quiz) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(quiz);
        }, (err) => next(err))
        .catch((err) => next(err));
  
  });



module.exports = router;
