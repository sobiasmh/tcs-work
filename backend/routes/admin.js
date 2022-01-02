var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Class = require('../models/class');
var Teacher = require('../models/teacher');

var Admin = require('../models/admin');
var Student = require('../models/student');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/classes', function(req, res, next) {
  Class.find({}).populate('teacher').populate('students.sid').exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
router.get('/students', function(req, res, next) {
  Student.find().sort('name').exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

router.post('/addclass', function(req, res, next) {
  Class.create(req.body)
      .then((result) => {
          console.log('Class has been Added ', result);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(result);
      }, (err) => next(err))
      .catch((err) => next(err));
});
router.post('/addstudent', function(req, res, next) {
  
  Student.create(req.body)
      .then((student) => {
          console.log('Student has been Added ', student);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(student);
      }, (err) => next(err))
      .catch((err) => next(err));
});
router.put('/assign/:cid/Student/:sid', function(req, res, next) {
  Class.findOneAndUpdate({ _id: req.params.cid }, {
          "$push": {
              "students": {
                  "sid": req.params.sid
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
