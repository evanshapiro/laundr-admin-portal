//import { getAll } from '../controllers/user-controller.js';
const UserController = require('../controllers/user-controller.js');
const SubscriptionController = require('../controllers/subscription-controller.js');
const OrderController = require('../controllers/order-controller.js');
const express = require('express');

const v1Router = express.Router();

v1Router.get('/users', UserController.getAll);
v1Router.get('/subscriptions', SubscriptionController.getAll);
v1Router.get('/orders', OrderController.getAll);

module.exports = v1Router;
