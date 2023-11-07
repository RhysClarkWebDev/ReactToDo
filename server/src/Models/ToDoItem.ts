import { Schema, model } from 'mongoose';


const toDoItemSchema = new Schema({
  text: String,
  complete: Boolean
});



export default model('Item', toDoItemSchema);