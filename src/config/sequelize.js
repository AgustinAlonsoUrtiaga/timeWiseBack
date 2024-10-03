const { Sequelize } = require('sequelize');

// Crear una nueva instancia de Sequelize
const sequelize = new Sequelize('timeWise', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',  // Dialecto para MySQL
    logging: false     // Desactiva el logging de SQL en la consola
});

// Probar la conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Conectado a la base de datos MySQL con Sequelize');
    })
    .catch((err) => {
        console.error('Error al conectar a la base de datos:', err);
    });

module.exports = sequelize;