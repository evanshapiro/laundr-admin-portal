var mongoose = require('mongoose');
const User = require("./models/user-model.js")

mongoose.connect(process.env.DB_URI || require('./config/config.js').db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() =>
{
    console.log(`Successfully connected to MongoDB.`)
});

users = [
    { username: 'Bob', email: 'bob@gmail.com', createdDate: new Date('2015-3-8') },
    { username: 'Bill', email: 'bill@aol.com', createdDate: new Date('2018-7-11') }
  ]

User.create(users).then(() => User.find()).then(users => console.log(users))