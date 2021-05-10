const config = require('config');

const dbConfig = config.get('dbConfig');

module.exports = {
  development: dbConfig,
  test: dbConfig,
  production: dbConfig,
};
