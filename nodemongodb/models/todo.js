/** 

  In here we use mongoose to define the schema of our Todo collection

  As in relation databases collections are like tables 

  the fields inside the schema map to attributes of the Todo collection jus like columns of a table in relation databases
*/

const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({

  title: String,

  content: String,

  isDone: {
    type: Boolean,
    default: false
  },

  dateCreated: {
    type: Date,
    default: Date.now()
  }

});

module.exports = mongoose.model('Todo', todoSchema);