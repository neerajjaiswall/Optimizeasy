const express = require('express');
const { findOne } = require('../model/userSchema');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('../db/conn');
const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");
const authenticate = require('../middleware/authenticate');


router.get('/', (req, res) => {
    res.send('Hello world fromt the server !');
});


/*

// Using Promises in Javascript:

router.post('/register', (req, res) => {
    // console.log(req.body);          // to get the whole data

    // console.log(req.body.name);     // to get just the name

    // this is shortcut method
    
    const {name, email, phone, password, cpassword} = req.body;
    if(!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({error: "All fields are mandatory!"});
    }

    User.findOne({email: email}).then((userExist) => {
        if(userExist) {
            return res.status(422).json({error: "Email already registered"});
        }

        const user = new User({name, email, phone, password, cpassword});

        user.save().then(() => {
            res.status(201).json({message: "user registered successfully"});
        }).catch((err) => res.status(500).json({error: "Failed to register"}));
    }).catch(err => {console.log(err); });

*/


// Using Async-await in Javascript:

router.post('/register', async (req, res) => {
    
    const {name, email, phone, password, cpassword} = req.body;
    if(!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({error: "All fields are mandatory!"});
    }

    try{
        const userExist = await User.findOne({email: email});
        if(userExist) {
            return res.status(422).json({error: "Email already registered"});
        }
        else if(password != cpassword) {
            return res.status(422).json({error: "Password dosen't matched"});
        }
        else {
            const user = new User({name, email, phone, password, cpassword});
            await user.save();
            res.status(201).json({message: "user registered successfully"});
        }
    }
    catch(err){
        console.log(err);
    }
    
    // res.json({message: req.body });
});


router.post('/signin', async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({error: "Some fields are empty"});
        }

        const userLogin = await User.findOne({email: email});
        console.log(userLogin);
        if(userLogin) {
            const match = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if(!match) {
                res.json({error: "Invalid Credentials"});
            }
            else {
                res.json({message: "user successfully logged in"});
            }
        }
        else {
            res.json({error: "Invalid Credentials"});
        }
    }
    catch(err) {
        console.log(err);
    }
})


router.get('/profile', authenticate, (req, res) => {
    res.send('my courses !');
});

module.exports = router;

