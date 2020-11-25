//import Order from "../models/order-model.js";
const Order = require("../models/order-model.js")

module.exports.getAll = async (req, res) => {
    Order.find()
        .then(orders => res.send(orders))
        .catch(err => res.status(500).send("unable to get orders"))
}
