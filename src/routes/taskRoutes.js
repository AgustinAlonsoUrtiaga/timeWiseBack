const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Rutas de las tareas
router.get('/tasks', taskController.getAllTasks); // Obtener todas las tareas
router.get('/tasks/:id', taskController.getTaskById); // Obtener una tarea por ID
router.post('/tasks', taskController.createTask); // Crear una nueva tarea
router.put('/tasks/:id', taskController.updateTask); // Actualizar una tarea por ID
router.delete('/tasks/:id', taskController.deleteTask); // Eliminar una tarea por ID

module.exports = router;