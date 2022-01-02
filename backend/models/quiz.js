var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var quizSchema = new Schema({
    
        question:{
          type:String
        },
        answers:{
          type:String
        },
        totalmarks:{
          type: Number
        }
      
});

module.exports = mongoose.model('Quiz', quizSchema);

