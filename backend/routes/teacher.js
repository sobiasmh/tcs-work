var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Class = require('../models/class');
var Quiz = require('../models/quiz');

var Admin = require('../models/admin');
var Student = require('../models/student');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/addquiz', function(req, res, next) {
  Quiz.create(req.body)
      .then((quiz) => {
          console.log('Quiz has been Added ', quiz);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(result);
      }, (err) => next(err))
      .catch((err) => next(err));
});

router.get('/quiz', function(req, res, next) {
    Quiz.find().sort('question').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
  });

  router.get('/quiz/:id', function(req, res, next) {
    Quiz.findById(req.params.id)
        .then((quiz) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(quiz);
        }, (err) => next(err))
        .catch((err) => next(err));
  
  });


router.put('/assign/:cid/Quiz/:qid', function(req, res, next) {
    Class.findOneAndUpdate({ _id: req.params.cid }, {
            "$push": {
                "quizes": {
                    "qid": req.params.qid
                }
            }
        }, { new: true, upsert: false },
        function(error, results) {
            if (error) {
                return next(error);
            }
            // Respond with valid data
            res.json(results);
        });
  });
module.exports = router;
