var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var classSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'Teacher'
    },
    students: {
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'Student'
            }
        }]
    },
    quizes:{
        type: [{
            qid: {
                type: mongoose.Types.ObjectId,
                ref: 'Quiz'
            }
        }]
    },
    Material:{
        type:[]
    }
});

module.exports = mongoose.model('Class', classSchema);