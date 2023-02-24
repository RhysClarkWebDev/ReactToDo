const mongoose = require('mongoose');


const toDoItemSchema = new mongoose.Schema({
    text: String,
    complete: Boolean
})



module.exports = mongoose.model('Item', toDoItemSchema);