import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import toDoRoutes from '@/Routes/todo';


dotenv.config();

const port = process.env.PORT;


const frontEnd = path.join(__dirname, '..', 'client', 'dist');


mongoose.set('strictQuery', true);

const app = express();

app.use(express.static(frontEnd));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());



// Routes
app.use('/api/toDoItems', toDoRoutes);





async function main(){
  await mongoose.connect(process.env.MONGO_SERVER as string);
}
main().catch(err => console.log(err));



app.get('/', (req, res) => {
  res.sendFile(frontEnd + '/index.html');
});







app.listen(port, () => {
  console.log('App is running on port: ' + port);
});