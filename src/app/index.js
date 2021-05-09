import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import logger from 'morgan';

import indexRouter from './routes/index.router';
import userRouter from './routes/user.router';

const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

// Route declarations
app.use('/', indexRouter);
app.use('/user', userRouter);

export default app;
