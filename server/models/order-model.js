const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderNumber: { type: Number, required: true }, // TODO make unique
    customerName: { type: String, required: true }, // TODO make unique
    pickupTime:{ type: Date, required: true },
    deliveryTime:{ type: Date, required: true },
    driverName:{ type: String, required: true },
    customerAddress:{ type: String, required: true },
    orderStatus:{ type: String, required: true },
    orderWeight:{ type: String, required: true }
});

module.exports = mongoose.model('orders', orderSchema);
