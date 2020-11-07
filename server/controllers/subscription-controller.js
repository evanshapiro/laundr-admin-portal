//import Subscription from "../models/subscription-model.js";
const Subscription = require("../models/subscription-model.js")

module.exports.getAll = async (req, res) => {
    Subscription.find()
        .then(subscriptions => res.send(subscriptions))
        .catch(err => res.status(500).send("unable to get subscriptions"))
}
