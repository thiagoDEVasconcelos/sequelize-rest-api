const express = require('express');
const { default: routes } = require('./routes');

const app = express();

routes(app)

module.exports = app;
