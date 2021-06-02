import Router from 'express';
import { PeopleController } from '../controllers/people.controller';

/**
 * @swagger
 * tags:
 *   name: People
 *   description: People management
 */
const PeopleRouter = Router();

/**
 * @swagger
 * /people/:
 *   post:
 *     summary: Create all person
 *     parameters:
 *        - name: named
 *          description: Name of the person
 *          in: formData
 *          required: true
 *          type: string
 *          example: Leanne Graham
 *     tags:
 *      - People
 *     responses:
 *       200:
 *         description: Success
 *
 */
PeopleRouter.route('/').post(PeopleController.create);

/**
 * @swagger
 * /people/:
 *   get:
 *     summary: Get all people
 *     tags:
 *      - People
 *     responses:
 *       200:
 *         description: Success
 *
 */
PeopleRouter.route('/').get(PeopleController.readAll);

/**
 * @swagger
 * /people/{id}:
 *   get:
 *     summary: Get pèrson
 *     tags:
 *      - People
 *     parameters:
 *       - name: id
 *         description: Numeric ID of the person to retrieve.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *
 */
PeopleRouter.route('/:id').get(PeopleController.readById);

/**
 * @swagger
 * /people/{id}:
 *   put:
 *     summary: Update pèrson
 *     tags:
 *      - People
 *     parameters:
 *       - name: id
 *         description: Numeric ID of the person to retrieve.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *
 */
PeopleRouter.route('/:id').put(PeopleController.update);

/**
 * @swagger
 * /people/{id}:
 *   delete:
 *     summary: Delete pèrson
 *     tags:
 *      - People
 *     parameters:
 *       - name: id
 *         description: Numeric ID of the person to retrieve.
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *
 */
PeopleRouter.route('/:id').delete(PeopleController.delete);

export default PeopleRouter;
