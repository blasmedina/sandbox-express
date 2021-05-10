import { Sequelize, Op } from 'sequelize';
import config from 'config';

const dbConfig: any = config.get('dbConfig');

const sequelize = dbConfig.url
  ? new Sequelize(dbConfig.url, dbConfig)
  : new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

export { Sequelize, sequelize, Op };
