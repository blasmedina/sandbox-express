import Router from 'express';
import { IndexController } from '../controllers/index.controller';

const IndexRouter = Router();

IndexRouter.route('/').get(IndexController.getIndex);

export default IndexRouter;
