var mongoose = require('mongoose');
const Auth = require("./models/auth-model.js")
const bcrypt = require('bcryptjs')

if(!process.env.PASSWORD || process.env.PASSWORD.length < 8){
    console.error("please set the PASSWORD environment variable to a password at least 8 characters long");
}

mongoose.connect(process.env.DB_URI || require('./config/config.js').db.uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log(`Successfully connected to MongoDB.`)
});

let authQuery = {
    email: "admin.portal@laundr.io"
}

let auth = {
    ...authQuery,
    passwordHash: bcrypt.hashSync(process.env.PASSWORD)
}

Auth.findOneAndUpdate(authQuery, auth, {upsert: true, overwrite: true, new: true})
    .then(doc => console.log(`password updated ${doc.createdDate}`))
    .then(mongoose.disconnect)