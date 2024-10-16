const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: true,
});

User.sync()
  .then(() => {
    console.log('Tabla "users" sincronizada con éxito.');
  })
  .catch((err) => {
    console.error('Error al sincronizar la tabla "users":', err);
  });

module.exports = User;