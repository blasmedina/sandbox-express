import Router from 'express';
import { PeopleController } from '../controllers/people.controller';

const PeopleRouter = Router();

PeopleRouter.route('/').post(PeopleController.create);
PeopleRouter.route('/').get(PeopleController.readAll);
PeopleRouter.route('/:id').get(PeopleController.readById);
PeopleRouter.route('/:id').put(PeopleController.update);
PeopleRouter.route('/:id').delete(PeopleController.delete);

export default PeopleRouter;
