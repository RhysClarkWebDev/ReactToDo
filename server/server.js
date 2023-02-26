const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
require('dotenv').config();

const port = process.env.PORT;

const toDoRoutes = require('./Routes/todo');

const frontEnd = path.join(__dirname, '..', 'client', 'dist');


mongoose.set('strictQuery', true);


app.use(express.static(frontEnd));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())



// Routes
app.use('/api/toDoItems', toDoRoutes);





async function main(){
    await mongoose.connect(process.env.MONGO_SERVER);
}
main().catch(err => console.log(err));



app.get("/", (req, res) => {
    res.sendFile(frontEnd + "/index.html");
})







app.listen(port, () => {
     console.log("App is running on port: " + port);
})