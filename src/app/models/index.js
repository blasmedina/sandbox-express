/**
 * Only the logic of index.js is modified. For the creation of the models,
 * the original logic is still maintained to be able to occupy 'sequelize-cli'
 */

import Sequelize, { DataTypes } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../../config/database.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Model Instantiation
const db = {
  User: require('./user')(sequelize, DataTypes),
};

// Model Association
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export { sequelize };
export { Sequelize };
export { db };
