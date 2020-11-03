//import User from "../models/user-model.js";
const User = require("../models/user-model.js")

module.exports.getAll = async (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.status(500).send("unable to get users"))
}