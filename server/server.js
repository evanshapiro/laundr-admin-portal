const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const v1Router = require("./routes/v1-route.js")
const cors = require('cors')
const publicPath = path.join(__dirname, '..', 'build');
const mongoose = require('mongoose');

// Use env port or default
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URI || require('./config/config.js').db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() =>
{
    console.log(`Successfully connected to MongoDB.`)
});

const app = express();

app.use(express.static(publicPath));

// enable cors
// TODO only use this in local dev
app.use(cors())

// body parsing middleware
app.use(bodyParser.json());

// add a router
app.use('/api/v1', v1Router);

app.listen(port, () => console.log(`Server now running on port ${port}!`));

