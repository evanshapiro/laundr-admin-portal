const express = require ('express'); 
const router = express.Router();
const bcrypt = require ('bcryptjs');
const auth = require ('../../middleware/auth'); 
const jwt = require ('jsonwebtoken');
const config = require('../../config/config.js');
const { check, validationResult } = require('express-validator');


const Auth = require ('../../models/auth-model');
//@route    GET api/auth
//@desc     Test route
//@access   Public
router.get('/', auth, async(req, res) => {
    try {
        const user = await Auth.findById(req.user.id).select('-passwordHash');
        res.json(user);
    }catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
    }

});

//@route    POST api/auth
//@desc     Authenticate user & get token
//@access   Public
router.post('/',
    [   check ('email', 'Please include a valid email').isEmail(),
        check('password','Password is required').exists()
    ] ,
async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email,password} = req.body; //filter out the parameters you need

    try{
        //see if user exists
        let user = await Auth.findOne({email});

        if(!user){
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials'}] });
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash); //plain text, encrypted pw
        if(!isMatch){
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials'}] });
        }

        //return jsonwebtoken - logged in right away
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign (payload, 
            config.jwtSecret,
            {expiresIn: "30 minutes"},
            (err, token) => {
                if (err) throw err;
                res.json({token}); //sending back the token 
            });
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }

    
});
module.exports = router;