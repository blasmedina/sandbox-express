import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

import logErrorsMiddleware from '../middlewares/log-errors.middleware';
import errorHandlerMiddleware from '../middlewares/error-handler.middleware';
import notFoundMiddleware from '../middlewares/not-found.middleware';

import usersRouter from '../routes/users.router';
import peopleRouter from '../routes/people.router';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const swaggerOptions: swaggerJsDoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: process.env.npm_package_name || 'title',
      description: process.env.npm_package_description || 'description',
      version: process.env.npm_package_version || 'version',
    },
  },
  apis: ['./src/routes/*router.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
const startedAt = new Date();

const app = express();

app.use(
  morgan('dev', {
    skip: () => app.get('env') === 'test',
  }),
);
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.get('/api-docs.json', (_req, res) => {
  res.json(swaggerDocs);
});

// Route declarations
app.get('/', (req, res) => {
  res.json(startedAt);
});
app.use('/users', usersRouter);
app.use('/people', peopleRouter);

app.use(logErrorsMiddleware, errorHandlerMiddleware, notFoundMiddleware);

export default app;
