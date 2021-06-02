import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

import logErrorsMiddleware from '../middlewares/log-errors.middleware';
import errorHandlerMiddleware from '../middlewares/error-handler.middleware';
import notFoundMiddleware from '../middlewares/not-found.middleware';

import usersRouter from '../routes/users.router';
import peopleRouter from '../routes/people.router';

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

// Route declarations
app.use('/', (req, res) => {
  res.json(startedAt);
});
app.use('/users', usersRouter);
app.use('/people', peopleRouter);

app.use(logErrorsMiddleware, errorHandlerMiddleware, notFoundMiddleware);

export default app;
