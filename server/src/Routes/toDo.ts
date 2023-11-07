import { Router } from 'express';
const router = Router();
import ToDoController from '@/Controllers/todoController';





router.get('/', ToDoController.getAllToDoItems);

router.post('/', ToDoController.createToDo);

router.patch('/', ToDoController.updateToDo);

router.patch('/status', ToDoController.updateToDoStatus);

router.delete('/', ToDoController.deleteToDo);



export default router;