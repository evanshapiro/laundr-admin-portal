var mongoose = require('mongoose');
const User = require("./models/user-model.js")
const Subscription = require("./models/subscription-model.js")

mongoose.connect(process.env.DB_URI || require('./config/config.js.js.js.js.js').db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() =>
{
    console.log(`Successfully connected to MongoDB.`)
});

users = [
    { username: 'Bob', email: 'bob@gmail.com', createdDate: new Date('2015-3-8') },
    { username: 'Bill', email: 'bill@aol.com', createdDate: new Date('2018-7-11') }
  ]

User.create(users).then(() => User.find()).then(users => console.log(users))

subscriptions = [
    { orderNumber: '928423', customerName: 'Bob Saget', pickupTime: new Date('2020-06-24T15:48:00'), deliveryTime: new Date('2020-06-24T06:30:00'), driverName: 'John', customerAddress: '4323 Main Street, Gainesville, Florida 32606', orderStatus: 'Delivered', orderWeight: '6 lb' },
    { orderNumber: '1102348', customerName: 'Dave Coulier', pickupTime: new Date('2020-08-02T09:12:00'), deliveryTime: new Date('2020-08-02T14:45:00'), driverName: 'Ashley', customerAddress: '923 Archer Street, Gainesville, Florida 32606', orderStatus: 'Out for Delivery', orderWeight: '5.5 lb' }
  ]

Subscription.create(subscriptions).then(() => Subscription.find()).then(subscriptions => console.log(subscriptions))
