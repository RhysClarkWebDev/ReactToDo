const express = require("express");
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const toDoRoutes = require('./Routes/todo');


mongoose.set('strictQuery', true);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())



// Routes
app.use('/api/toDoItems', toDoRoutes);





async function main(){
    await mongoose.connect('mongodb://localhost:27017/toDoItems');
}
main().catch(err => console.log(err));



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})







app.listen(port, () => {
     console.log("App is running on port: " + port);
})