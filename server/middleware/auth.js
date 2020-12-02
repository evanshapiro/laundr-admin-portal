const jwt = require('jsonwebtoken');
const config = require('../config/config.js');


module.exports = function (req, res, next){
    if(config.skipAuth){
        next()
        return
    }

    //get token from header
    const token = req.header('x-auth-token');

    //check if no token 
    if (!token){
        return res.status(401).json({msg: 'No token, authorization denied'});
    }

    //verify the token 
    try{
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded.user;
        next();
    } catch(err){
        res.status(401).json({msg: 'Token is not valid'});
    }
}