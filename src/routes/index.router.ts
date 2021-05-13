import { IndexController } from '../controllers/index.controller';
import Router from 'express';

const IndexRouter = Router();

IndexRouter.route('/').get(IndexController.getIndex);

export default IndexRouter;
