const express = require ('express'); //an express server - can add this to the server.js file, but then it would get messy
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const config = require ('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/user-model'); 
//@route    POST api/users
//@desc     Test route
//@access   Public
router.post('/',
[
    check ('name', 'Name is required')
    .not()
    .isEmpty(),
    check ('email', 'Please include a valid email').isEmail(),
    check(
        'password',
        'Please enter a password with 8 or more characters')
        .isLength({min: 8})
] ,
async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {name, email, password} = req.body; //filter out the parameters you need

    try{
        //see if user exists
        let user = await User.findOne({email});

        if(user){
            return res.status(400).json({ errors: [{ msg: 'User already exists'}] });
        }


        user = new User ({ 
            name,
            email,
            password
        });
        
        const salt = await bcrypt.genSalt(10); //encrypt password - bcrypt
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        //return jsonwebtoken - logged in right away
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign (payload, 
            "JWTSECRET",
            //process.env.JWTSECRET,
            //config.get('jwtSecret'),
            {expiresIn: 360000},
            (err, token) => {
                if (err) throw err;
                res.json({token});
            });
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }

    
});

module.exports = router;