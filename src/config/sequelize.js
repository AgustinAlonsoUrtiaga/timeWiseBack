const { Sequelize } = require('sequelize');

// Crear una nueva instancia de Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT || 'mysql', // Dialecto, con 'mysql' por defecto
        port: process.env.DB_PORT,
        logging: false, // Desactiva el logging de SQL en la consola
        pool: {
            max: parseInt(process.env.DB_CONNECTION_LIMIT, 10) || 5, // Límite de conexiones
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

// Probar la conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Conectado a la base de datos MySQL con Sequelize');
    })
    .catch((err) => {
        console.error('Error al conectar a la base de datos:', err);
    });

module.exports = sequelize;