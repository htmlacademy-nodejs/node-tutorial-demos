'use strict';

const express = require('express');
const { body } = require('express-validator');

const app = express();
app.use(express.json());

app.post(`/comment`, [
  body(`text`)
    .not().isEmpty()
    .trim()
    .escape(),
  body(`notifyOnReply`).toBoolean()
], (req, res) => {
  // Обработка запроса
});
