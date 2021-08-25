const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const routes = new express.Router();

routes.post('/register', CandidateControle.register);

module.exports = routes;