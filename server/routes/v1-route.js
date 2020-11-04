//import { getAll } from '../controllers/user-controller.js';
const UserController = require('../controllers/user-controller.js');
const express = require('express');

const v1Router = express.Router();

v1Router.get('/User', UserController.getAll);

module.exports = v1Router;
