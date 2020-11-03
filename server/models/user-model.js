const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true }, // TODO make unique
    email: { type: String, required: true }, // TODO make unique
    createdDate:{ type: Date, required: true }
});

module.exports = mongoose.model('users', userSchema);