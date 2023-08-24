const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USERNAME,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: 'postgres',
  }
);
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  connection_string: {
    type: DataTypes.STRING,
    defaultValue: 'localhost:9092',
  },
  broker_ids: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
(async () => {
  try {
    process.env.NODE_ENV === 'production'
      ? await sequelize.sync()
      : await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to sync models:', error);
  }
})();

module.exports = {
  sequelize,
  User,
};
