const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'timeWise',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos MySQL: ', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
