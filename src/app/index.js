const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index.router');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Route declarations
app.use('/', indexRouter);

module.exports = app;
