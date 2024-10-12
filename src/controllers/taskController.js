const taskService = require('../services/taskService');

const taskController = {
    // Obtener todas las tareas
    getAllTasks: async (req, res) => {
        try {
            const tasks = await taskService.getAllTasks();
            res.json(tasks);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Obtener una tarea por ID
    getTaskById: async (req, res) => {
        try {
            const task = await taskService.getTaskById(req.params.id);
            res.json(task);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getTaskByEnvironment: async (req, res) => {
        try {
            const environment = decodeURIComponent(req.params.env);
            const tasks = await taskService.getTaskByEnvironment(environment);
            res.json(tasks);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Crear una nueva tarea
    createTask: async (req, res) => {
        try {
            const newTask = await taskService.createTask(req.body);
            res.status(201).json(newTask);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Actualizar una tarea
    updateTask: async (req, res) => {
        try {
            await taskService.updateTask(req.params.id, req.body);
            res.json({ message: 'Tarea actualizada' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Eliminar una tarea
    deleteTask: async (req, res) => {
        try {
            await taskService.deleteTask(req.params.id);
            res.json({ message: 'Tarea eliminada' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = taskController;