require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const payreqsRouter = require('./routes/payreqs');
const refreshTokensRouter = require('./routes/refreshTokens');
const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/payreqs', payreqsRouter);
// app.get('/payreqs', (req, res) => {
//   res.send('payreqs mantap');
// });
app.use('/refresh-tokens', refreshTokensRouter);

module.exports = app;
