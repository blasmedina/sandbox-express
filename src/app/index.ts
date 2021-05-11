import httpContext from 'express-http-context';
import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import logger from 'morgan';

import firstMiddleware from './middlewares/first.middleware';
import errorHandlerMiddleware from './middlewares/errorHandler.middleware';
import logErrorsMiddleware from './middlewares/logErrors.middleware';

import indexRouter from './routes/index.router';
import userRouter from './routes/user.router';

const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(httpContext.middleware);

app.use(firstMiddleware);

// Route declarations
app.use('/', indexRouter);
app.use('/user', userRouter);

app.use(logErrorsMiddleware, errorHandlerMiddleware);

export default app;
