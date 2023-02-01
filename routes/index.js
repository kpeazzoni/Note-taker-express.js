const express = require('express');
const notes = require('./notes');
const app = express();

app.set('/api/', notes);

module.exports = app;
