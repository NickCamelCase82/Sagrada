const express = require('express');
const morgan = require('morgan');

const path = require('path');
const cors = require('cors');
require('dotenv').config();
const dbCheck = require('./db/dbConnectionCheck');

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

dbCheck();

app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});
