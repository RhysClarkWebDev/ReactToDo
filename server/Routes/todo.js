const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController')





router.get('/', controller.getAllToDoItems);

router.post('/', controller.createToDo);

router.patch('/', controller.updateToDo);

router.patch('/status', controller.updateToDoStatus);

router.delete('/', controller.deleteToDo);



module.exports = router;