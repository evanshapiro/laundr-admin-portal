const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdDate: {
        type: Date,
        required: true
    }
});

module.exports = User = mongoose.model('users', UserSchema);

