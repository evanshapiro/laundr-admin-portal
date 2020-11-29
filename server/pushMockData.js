var mongoose = require('mongoose');
const User = require("./models/user-model.js")
const Subscription = require("./models/subscription-model.js")
const Order = require("./models/order-model.js")

mongoose.connect(process.env.DB_URI || require('./config/config.js').db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() =>
{
    console.log(`Successfully connected to MongoDB.`)
});

users = [
    { username: 'Bob', email: 'bob@gmail.com', createdDate: new Date('2015-3-8') },
    { username: 'Bill', email: 'bill@aol.com', createdDate: new Date('2018-7-11') },
    { username: 'Jan', email: 'jan@aol.com', createdDate: new Date('2017-4-13') },
    { username: 'Janice', email: 'janice@aol.com', createdDate: new Date('2017-3-1') },
    { username: 'Deborah', email: 'deborah@aol.com', createdDate: new Date('2016-9-23') },
    { username: 'William', email: 'william@aol.com', createdDate: new Date('2019-2-28') },
    { username: 'Fred', email: 'fred@aol.com', createdDate: new Date('2020-6-17') },
    { username: 'John', email: 'john@aol.com', createdDate: new Date('2019-3-16') },
    { username: 'Tina', email: 'tina@aol.com', createdDate: new Date('2016-1-19') },
    { username: 'Dave', email: 'dave@aol.com', createdDate: new Date('2019-5-25') },
    { username: 'Simon', email: 'simon@aol.com', createdDate: new Date('2018-4-3') },
    { username: 'Mary', email: 'mary@aol.com', createdDate: new Date('2017-6-14') }
  ]

User.create(users).then(() => User.find()).then(users => console.log(users))

subscriptions = [
    { customerName: 'Bob Saget', subscriptionType: 'Standard', startDate: new Date('2020-05-28'), renewalDate: new Date('2020-10-28'), maximumWeight: '48 lb', currentWeight: '3 lb', subscriptionStatus: 'Active' },
    { customerName: 'Jan Stevens', subscriptionType: 'Standard', startDate: new Date('2017-04-13'), renewalDate: new Date('2020-11-13'), maximumWeight: '48 lb', currentWeight: '13 lb', subscriptionStatus: 'Active' },
    { customerName: 'Janice Edwards', subscriptionType: 'Plus', startDate: new Date('2017-3-1'), renewalDate: new Date('2020-11-1'), maximumWeight: '66 lb', currentWeight: '28 lb', subscriptionStatus: 'Active' },
    { customerName: 'Deborah Johnson', subscriptionType: 'Family', startDate: new Date('2016-9-23'), renewalDate: new Date('2020-11-23'), maximumWeight: '84 lb', currentWeight: '68 lb', subscriptionStatus: 'Active' },
    { customerName: 'William Davidson', subscriptionType: 'Standard', startDate: new Date('2019-2-28'), renewalDate: new Date('2020-10-28'), maximumWeight: '48 lb', currentWeight: '23 lb', subscriptionStatus: 'Active' },
    { customerName: 'Fred Simons', subscriptionType: 'Plus', startDate: new Date('2020-6-17'), renewalDate: new Date('2020-11-17'), maximumWeight: '66 lb', currentWeight: '19 lb', subscriptionStatus: 'Active' },
    { customerName: 'Tina Davies', subscriptionType: 'Plus', startDate: new Date('2019-3-16'), renewalDate: new Date('2020-11-16'), maximumWeight: '66 lb', currentWeight: '53 lb', subscriptionStatus: 'Active' },
    { customerName: 'John Stamos', subscriptionType: 'Family', startDate: new Date('2016-1-19'), renewalDate: new Date('2017-5-19'), maximumWeight: '84 lb', currentWeight: '0 lb', subscriptionStatus: 'Inactive' },
    { customerName: 'Simon Seiz', subscriptionType: 'Standard', startDate: new Date('2018-4-3'), renewalDate: new Date('2020-11-3'), maximumWeight: '48 lb', currentWeight: '18 lb', subscriptionStatus: 'Active' },
    { customerName: 'Mary Johnson', subscriptionType: 'Plus', startDate: new Date('2017-6-14'), renewalDate: new Date('2020-11-14'), maximumWeight: '66 lb', currentWeight: '39 lb', subscriptionStatus: 'Active' },
    { customerName: 'Bill Richardson', subscriptionType: 'Family', startDate: new Date('2018-7-11'), renewalDate: new Date('2018-10-11'), maximumWeight: '84 lb', currentWeight: '0 lb', subscriptionStatus: 'Inactive' },
    { customerName: 'Dave Coulier', subscriptionType: 'Plus', startDate: new Date('2019-05-25'), renewalDate: new Date('2020-11-25'), maximumWeight: '66 lb', currentWeight: '35 lb', subscriptionStatus: 'Active' }
  ]

Subscription.create(subscriptions).then(() => Subscription.find()).then(subscriptions => console.log(subscriptions))

orders = [
    { orderNumber: '928423', customerName: 'Bob Saget', pickupTime: new Date('2020-06-24T15:48:00'), deliveryTime: new Date('2020-06-24T06:30:00'), driverName: 'John', customerAddress: '4323 Main Street, Gainesville, Florida 32606', orderStatus: 'Delivered', orderWeight: '6 lb' },
    { orderNumber: '253254', customerName: 'Jan Stevens', pickupTime: new Date('2018-03-25T07:10:00'), deliveryTime: new Date('2018-03-25T15:15:00'), driverName: 'Henry', customerAddress: '1043 Archer Road, Gainesville, Florida 32606', orderStatus: 'Delivered', orderWeight: '7.5 lb' },
    { orderNumber: '832083', customerName: 'Janice Edwards', pickupTime: new Date('2019-03-29T09:03:00'), deliveryTime: new Date('2019-03-29T14:15:00'), driverName: 'Ashley', customerAddress: '3532 Main Street, Gainesville, Florida 32606', orderStatus: 'Out for Delivery', orderWeight: '15.5 lb' },
    { orderNumber: '110328', customerName: 'Deborah Johnson', pickupTime: new Date('2018-05-15T09:28:00'), deliveryTime: new Date('2018-05-15T14:30:00'), driverName: 'Henry', customerAddress: '3252 Archer Road, Gainesville, Florida 32606', orderStatus: 'Delivered', orderWeight: '10 lb' },
    { orderNumber: '203923', customerName: 'William Davidson', pickupTime: new Date('2019-07-12T10:39:00'), deliveryTime: new Date('2019-07-12T16:35:00'), driverName: 'Ashley', customerAddress: '4609 SW 16th Ave, Gainesville, Florida 32606', orderStatus: 'Out for Delivery', orderWeight: '1.25 lb' },
    { orderNumber: '238052', customerName: 'Fred Simons', pickupTime: new Date('2017-03-23T11:16:00'), deliveryTime: new Date('2017-03-23T18:15:00'), driverName: 'John', customerAddress: '935 16th Street, Gainesville, Florida 32606', orderStatus: 'Ready for Pickup', orderWeight: '3.5 lb' },
    { orderNumber: '193579', customerName: 'Tina Davies', pickupTime: new Date('2018-12-03T10:02:00'), deliveryTime: new Date('2018-12-03T15:45:00'), driverName: 'Henry', customerAddress: '1953 Archer Road, Gainesville, Florida 32606', orderStatus: 'Out for Delivery', orderWeight: '5.5 lb' },
    { orderNumber: '864843', customerName: 'John Stamos', pickupTime: new Date('2016-08-16T09:24:00'), deliveryTime: new Date('2016-08-16T14:24:00'), driverName: 'Ashley', customerAddress: '5443 Main Street, Gainesville, Florida 32606', orderStatus: 'Ready for Pickup', orderWeight: '6.5 lb' },
    { orderNumber: '340834', customerName: 'Simon Seiz', pickupTime: new Date('2019-05-28T09:37:00'), deliveryTime: new Date('2019-05-28T13:25:00'), driverName: 'John', customerAddress: '293 17th Street, Gainesville, Florida 32606', orderStatus: 'Delivered', orderWeight: '4 lb' },
    { orderNumber: '320828', customerName: 'Mary Johnson', pickupTime: new Date('2020-04-07T09:38:00'), deliveryTime: new Date('2020-04-07T16:25:00'), driverName: 'Henry', customerAddress: '9643 Archer Road, Gainesville, Florida 32606', orderStatus: 'Out for Delivery', orderWeight: '4.3 lb' },
    { orderNumber: '520852', customerName: 'Bill Richardson', pickupTime: new Date('2018-05-03T09:02:00'), deliveryTime: new Date('2018-05-03T14:35:00'), driverName: 'John', customerAddress: '4433 18th Street, Gainesville, Florida 32606', orderStatus: 'Ready for Pickup', orderWeight: '2.5 lb' },
    { orderNumber: '1102348', customerName: 'Dave Coulier', pickupTime: new Date('2020-08-02T09:12:00'), deliveryTime: new Date('2020-08-02T14:45:00'), driverName: 'Ashley', customerAddress: '923 Archer Street, Gainesville, Florida 32606', orderStatus: 'Out for Delivery', orderWeight: '5.5 lb' }
  ]

Order.create(orders).then(() => Order.find()).then(orders => console.log(orders))
