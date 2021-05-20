import httpContext from 'express-http-context';
import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import logger from 'morgan';

import firstMiddleware from '../middlewares/first.middleware';
import errorHandlerMiddleware from '../middlewares/error-handler.middleware';
import logErrorsMiddleware from '../middlewares/log-errors.middleware';

import indexRouter from '../routes/index.router';
import usersRouter from '../routes/users.router';
import peopleRouter from '../routes/people.router';

const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(httpContext.middleware);

app.use(firstMiddleware);

// Route declarations
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/people', peopleRouter);

app.use(logErrorsMiddleware, errorHandlerMiddleware);

export default app;
