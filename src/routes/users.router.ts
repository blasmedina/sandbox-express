import Router from 'express';
import { UserController } from '../controllers/user.controller';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */
const UserRouter = Router();

/**
 * @swagger
 * /users/:
 *   post:
 *     summary: Create a user
 *     parameters:
 *        - name: name
 *          description: Name of the user
 *          in: formData
 *          required: true
 *          type: string
 *          example: John
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Success
 *
 */
UserRouter.route('/').post(UserController.create);

/**
 * @swagger
 * /users/:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Success
 *
 */
UserRouter.route('/').get(UserController.readAll);

/**
 * @swagger
 * /users/paged/:
 *   get:
 *     summary: Get all users with pagination
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: size
 *         description: size
 *         type: integer
 *       - in: query
 *         name: page
 *         description: pagination
 *         type: integer
 *       - in: query
 *         name: filter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *
 */
UserRouter.route('/paged/').get(UserController.readAllWithPagination);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         description: String ID of the user to retrieve.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *
 */
UserRouter.route('/:id').get(UserController.readById);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         description: String ID of the person to retrieve.
 *         in: path
 *         required: true
 *         type: string
 *       - name: name
 *         description: Name of the user
 *         in: formData
 *         required: true
 *         type: string
 *         example: John
 *     responses:
 *       200:
 *         description: Success
 *
 */
UserRouter.route('/:id').put(UserController.update);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         description: String ID of the user to retrieve.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *
 */
UserRouter.route('/:id').delete(UserController.delete);

export default UserRouter;
