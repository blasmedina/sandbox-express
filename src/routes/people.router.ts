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
 *     summary: Create a person
 *     parameters:
 *        - name: firstName
 *          description: First name of the person
 *          in: formData
 *          required: true
 *          type: string
 *          example: John
 *        - name: lastName
 *          description: Last name of the person
 *          in: formData
 *          required: true
 *          type: string
 *          example: Connor
 *        - name: email
 *          description: Email of the person
 *          in: formData
 *          required: true
 *          type: string
 *          example: a@b.c
 *     tags: [People]
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
 *     tags: [People]
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
 *     summary: Get a person
 *     tags: [People]
 *     parameters:
 *       - name: id
 *         description: Numeric ID of the person to retrieve.
 *         in: path
 *         required: true
 *         type: integer
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
 *     summary: Update a person
 *     tags: [People]
 *     parameters:
 *       - name: id
 *         description: Numeric ID of the person to retrieve.
 *         in: path
 *         required: true
 *         type: integer
 *       - name: firstName
 *         description: First name of the person
 *         in: formData
 *         type: string
 *         example: John
 *       - name: lastName
 *         description: Last name of the person
 *         in: formData
 *         type: string
 *         example: Connor
 *       - name: email
 *         description: Email of the person
 *         in: formData
 *         type: string
 *         example: a@b.c
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
 *     summary: Delete a person
 *     tags: [People]
 *     parameters:
 *       - name: id
 *         description: Numeric ID of the person to retrieve.
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 *
 */
PeopleRouter.route('/:id').delete(PeopleController.delete);

export default PeopleRouter;
