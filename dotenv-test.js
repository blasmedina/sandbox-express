// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenvFlow = require('dotenv-flow');

module.exports = async () => {
  dotenvFlow.config();
};
