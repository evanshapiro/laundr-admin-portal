const express = require('express');
var mongoose = require('mongoose');


mongoose.connect(process.env.DB_URI || require('./config/config.js').db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() =>
{
    console.log(`Successfully connected to MongoDB.`)
});
// Use env port or default
const port = process.env.PORT || 5000;

const app = express();
app.listen(port, () => console.log(`Server now running on port ${port}!`));

