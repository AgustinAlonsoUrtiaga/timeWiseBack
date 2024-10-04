const Task = require('../models/taskModel');

const taskService = {
    // Obtener todas las tareas
    getAllTasks: async () => {
        try {
            const tasks = await Task.findAll({
                order: [
                    ['priority', 'ASC'] // Ordenar por prioridad de menor a mayor
                ]
            });
            return tasks;
        } catch (err) {
            throw err;
        }
    },
    updatePriority: async (taskId, newPriority) => {
        try {
            const task = await Task.findByPk(taskId);
            if (task) {
                task.priority = newPriority; // Actualizar el valor numérico de prioridad
                await task.save();
                return task;
            } else {
                throw new Error('Task not found');
            }
        } catch (err) {
            throw err;
        }
    },
    // Obtener una tarea por ID
    getTaskById: async (id) => {
        try {
            const task = await Task.findByPk(id);
            return task;
        } catch (err) {
            throw err;
        }
    },

    // Crear una nueva tarea
    createTask: async (taskData) => {
        try {
            const newTask = await Task.create(taskData);
            return newTask;
        } catch (err) {
            throw err;
        }
    },

    // Actualizar una tarea por ID
    updateTask: async (id, taskData) => {
        try {
            const task = await Task.findByPk(id);
            if (!task) {
                throw new Error('Tarea no encontrada');
            }
            await task.update(taskData);
            return task;
        } catch (err) {
            throw err;
        }
    },

    // Eliminar una tarea por ID
    deleteTask: async (id) => {
        try {
            const task = await Task.findByPk(id);
            if (!task) {
                throw new Error('Tarea no encontrada');
            }
            await task.destroy();
            return { message: 'Tarea eliminada' };
        } catch (err) {
            throw err;
        }
    }
};

module.exports = taskService;