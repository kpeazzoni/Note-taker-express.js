const express = require('express');
const notes = require('./notes');

const notesRoute = require('./notes');

const app = express();

app.use('/notes', notesRoute);

module.exports = app;
