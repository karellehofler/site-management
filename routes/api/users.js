const express = require('express');
const router = express.Router();
const config = require('../../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const secret = config.jwtSecret;

//Get all Users
router.get('/', (req, res) => {
    User.find()
    .sort({ date: -1 })
    .then(users => res.json(users)).catch(err => res.json(err));
});

//Get User Profile
router.get('/:id', (req,res) => {
    User.findById(req.params.id)
    .then(user => res.json(user));
});

//Register New User
router.post('/signup', (req, res) => {
    const { name, username, email, password } = req.body;

    if(!name || !email || !password || !username ) {
        return res.status(400).json({ msg: 'Please enter all fields'});
    }

    User.findOne({ email })
    .then(user => {
        if(user) return res.status(400).json({ msg: 'User already exists'});
        
        const newUser = new User({
            name, username, email, password
        });

        // Create salt & hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;

                newUser.save()
                .then(user => {
                    
                    jwt.sign(
                        { id: user.id },
                        secret,
                        { expiresIn: 86400 }, 
                        (err, token) => {
                            if(err) throw err;

                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    username: user.username,
                                    email: user.email
                                }
                            });

                        } //End of err,token call 
                    )
                });
            })
        });
    });
});

//Delete User from website
router.delete('/delete/:id', (req, res) => {
    User.findById(req.params.id) 
    .then((user) => user.remove().then(() => {
        res.json({ success: true })
    }))
    .catch((err) => {
        res.json({ success: false })
    })
});

module.exports = router;