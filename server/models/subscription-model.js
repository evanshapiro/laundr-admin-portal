const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    customerName: { type: String, required: true }, // TODO make unique
    subscriptionType:{ type: String, required: true },
    startDate:{ type: Date, required: true },
    renewalDate:{ type: Date, required: true },
    maximumWeight:{ type: String, required: true },
    currentWeight:{ type: String, required: true },
    subscriptionStatus:{ type: String, required: true }
});

module.exports = mongoose.model('subscriptions', subscriptionSchema);
