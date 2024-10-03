const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const connection = require('./config/db');
const cors = require('cors');

const Task = require('./models/taskModel');

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',  // Permitir el acceso desde localhost:4200
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
    credentials: true  // Si necesitas enviar cookies o credenciales
}));

app.use(bodyParser.json()); // Middleware para analizar JSON

app.use('/api', taskRoutes);

Task.sync({ alter: true })
    .then(() => {
        console.log('Tablas sincronizadas con éxito');
    })
    .catch((err) => {
        console.error('Error al sincronizar tablas:', err);
    });

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});