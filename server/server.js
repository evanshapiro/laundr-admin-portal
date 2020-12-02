const express = require('express');
const bodyParser = require('body-parser')
const v1Router = require("./routes/v1-route.js")
const cors = require('cors')
const path = require('path');
const publicPath = path.join(__dirname, '..', 'build');
const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

// Use env port or default
const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URI || require('./config/config.js').db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() =>
{
    console.log(`Successfully connected to MongoDB.`)
});

const app = express();

// enable cors
// TODO only use this in local dev
app.use(cors())

// body parsing middleware
app.use(bodyParser.json());
app.use(express.json ({extended: false}));

app.use('/api/auth', require ('./routes/api/auth'));
app.use('/api/v1', v1Router);

//serve static assets in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html')); 
    })

}

app.listen(port, () => console.log(`Server now running on port ${port}!`));

