//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password
module.exports = {
    db: {
        uri: 'mongodb+srv://402PaymentReq:cen3031@laundr-admin-portal.c3tmw.mongodb.net/<dbname>?retryWrites=true&w=majority', //place the URI of your mongo database here.
        
    },
    jwtSecret: '7g1ukymdutyrbli5h', // generated with Math.random().toString(36).substring(7) https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    skipAuth: true
};
