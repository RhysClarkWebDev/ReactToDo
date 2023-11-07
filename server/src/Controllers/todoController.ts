
import { Request, Response } from 'express';
import ToDoItem from '@/Models/ToDoItem';

//Get all To Do Items
const getAllToDoItems = async (req: Request, res: Response) => {
  ToDoItem.find({}, (err: string, items:object[])=>{
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(items);
    }
  });
};



//Create a new To Do Item
const createToDo = async(req: Request, res: Response) =>{
  const text = (req.body.text).replace(/[^A-Za-z0-9\s!?]/g,'');
  const complete = false;


  try{
    const newItem = await ToDoItem.create({text, complete});
    res.status(200).json(newItem);
  }catch(error){
    res.status(400).json({error: 'Failed Task'});
  }
};

//Update a To Do Item
const updateToDo = async(req: Request, res: Response) => {
  const id = req.body.id;
  const text = (req.body.text).replace(/[^A-Za-z0-9\s!?]/g,'');

  const complete = await ToDoItem.findOneAndUpdate({'_id': id}, {'text': text}, {new: true});
  if(!complete){
    res.status(400).json({error: 'Failed Task'});
  } else {
    res.status(200).json(complete);
  }
};

//Update a To Do Item Status to opposite of given in body
const updateToDoStatus = async(req: Request, res: Response) => {
  const id = req.body.id;
  const status = !req.body.complete;

  const complete = await ToDoItem.findOneAndUpdate({'_id': id}, {'complete': status});
  if(!complete){
    res.status(400).json({error: 'Failed Task'});
  } else {
    res.status(200).json(complete);
  }
};

//Delete a To Do Item
const deleteToDo = async(req: Request, res: Response) =>{
  const id = req.body.id;

  const complete = await ToDoItem.deleteOne({'_id': id});

  if(!complete){
    res.status(400).json({error: 'Failed Task'});
  } else {
    res.status(200).json(complete);
  }
};

export default {
  getAllToDoItems,
  createToDo,
  updateToDo,
  updateToDoStatus,
  deleteToDo
};