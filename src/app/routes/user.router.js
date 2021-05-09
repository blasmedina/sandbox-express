import { UserController } from '../controllers/user.controller';
import Router from 'express';

const UserRouter = Router();

UserRouter.route('/').post(UserController.create);
UserRouter.route('/').get(UserController.readAll);
UserRouter.route('/:id').get(UserController.readById);
UserRouter.route('/:id').put(UserController.update);
UserRouter.route('/:id').delete(UserController.delete);

export default UserRouter;
