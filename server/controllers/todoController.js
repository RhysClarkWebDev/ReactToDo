const ToDoItem = require('../Models/ToDoItem');

//Get all To Do Items
const getAllToDoItems = async (req, res) => {
    ToDoItem.find({}, (err, items)=>{
        if (err) {
            console.log(err);
          } else {
            res.status(200).json(items);
          }
    });
}



//Create a new To Do Item
const createToDo = async(req, res) =>{
    const text = (req.body.text).replace(/[^A-Za-z0-9\s!?]/g,'');
    const complete = false;


    try{
      const newItem = await ToDoItem.create({text, complete})
      res.status(200).json(newItem);
    }catch(error){
      res.status(400).json({error: error.message});
    }
}

//Update a To Do Item
const updateToDo = async(req, res) => {
    let id = req.body.id;
    let text = (req.body.text).replace(/[^A-Za-z0-9\s!?]/g,'')

    let complete = await ToDoItem.findOneAndUpdate({"_id": id}, {"text": text}, {new: true});
    if(!complete){
        res.status(400).json({error: error.message})
    } else {
        res.status(200).json(complete)
    }
}

//Update a To Do Item Status to opposite of given in body
const updateToDoStatus = async(req, res) => {
    let id = req.body.id;
    let status = !req.body.complete;

    let complete = await ToDoItem.findOneAndUpdate({"_id": id}, {"complete": status});
    if(!complete){
        res.status(400).json({error: error.message})
    } else {
        res.status(200).json(complete)
    }
}

//Delete a To Do Item
const deleteToDo = async(req, res) =>{
    let id = req.body.id;

    let complete = await ToDoItem.deleteOne({"_id": id});

    if(!complete){
        res.status(400).json({error: error.message})
    } else {
        res.status(200).json(complete)
    }
}

module.exports = {
    getAllToDoItems,
    createToDo,
    updateToDo,
    updateToDoStatus,
    deleteToDo
}