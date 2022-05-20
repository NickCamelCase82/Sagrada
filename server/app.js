const express = require('express');
const morgan = require('morgan');

const path = require('path');
const cors = require('cors');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const dbCheck = require('./db/dbConnectionCheck');

const userRouter = require('./routes/userRouter');
const gameRouter = require('./routes/gameRouter');

const app = express();

const PORT = process.env.PORT ?? 3002;

const corsConfig = {
  // Домены которым разрешен доступ к файлам
  origin: ['http://localhost:3000'],
};

app.use(cors(corsConfig));
app.use(morgan('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
  store: new FileStore(),
  name: 'MyCookie',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));

app.use('/', userRouter);
app.use('/game', gameRouter);

dbCheck();

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
