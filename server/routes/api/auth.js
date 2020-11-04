const express = require ('express'); 
const router = express.Router();
const bcrypt = require ('bcryptjs');
const auth = require ('../../middleware/auth'); 
const jwt = require ('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


const User = require ('../../models/user-model');
//@route    GET api/auth
//@desc     Test route
//@access   Public
router.get('/', auth, async(req, res) => {
    try {
        const user = await User.findById(req.users.id).select('-password');
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
        let user = await User.findOne({email});

        if(!user){
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials'}] });
        }

        const isMatch = await bcrypt.compare(password, user.password); //plain text, encrypted pw
        if(!isMatch){
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials'}] });
        }

        //return jsonwebtoken - logged in right away
        const payload = {
            users: {
                id: user.id
            }
        }

        jwt.sign (payload, 
            "JWTSECRET",
            //process.env.JWTSECRET,
            {expiresIn: 10},
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