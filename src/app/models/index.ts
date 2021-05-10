import { Sequelize, Op } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../../config/database.json')[env];

const sequelize = config.url
  ? new Sequelize(config.url, config)
  : new Sequelize(config.database, config.username, config.password, config);

export { Sequelize, sequelize, Op };
