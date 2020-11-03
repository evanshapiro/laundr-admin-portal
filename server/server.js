const express = require('express');
const bodyParser = require('body-parser')
const v1Router = require("./routes/v1-route.js")
var cors = require('cors')
var mongoose = require('mongoose');


mongoose.connect(process.env.DB_URI || require('./config/config.js').db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() =>
{
    console.log(`Successfully connected to MongoDB.`)
});
// Use env port or default
const port = process.env.PORT || 5000;

const app = express();

// enable cors
// TODO only use this in local dev
app.use(cors())

// body parsing middleware
app.use(bodyParser.json());

// add a router
app.use('/api/v1', v1Router);

app.listen(port, () => console.log(`Server now running on port ${port}!`));

