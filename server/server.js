const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
var mongoose = require('mongoose');

// Use env port or default
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

mongoose.connect(process.env.DB_URI || require('./config/config.js').db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() =>
{
    console.log(`Successfully connected to MongoDB.`)
});

app.listen(port, () => console.log(`Server now running on port ${port}!`));

