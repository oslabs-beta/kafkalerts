import Sequelize from 'sequelize';
import getUserModel from './user.js';
import getClusterModel from './cluster.js';

const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: 'postgres',
  }
);
const models = {
  User: getUserModel(sequelize, Sequelize),
  Cluster: getClusterModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };
export default models;
