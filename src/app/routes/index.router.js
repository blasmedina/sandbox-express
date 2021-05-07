const IndexController = require('../controllers/index.controller');
const Router = require('express');

const IndexRouter = Router();

IndexRouter.route('/').get(IndexController.getIndex);

module.exports = IndexRouter;
