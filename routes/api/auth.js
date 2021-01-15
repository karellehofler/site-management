const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//for development
const config = require('../../config/database');
//for production
// const config = require('config')

// Authenticate/Login User
router.post('/login', (req,res) => {
    const { email, password } = req.body;

    if(!email || !password ) {
        return res.status(400).json({ msg: 'Please enter all fields'});
    }

    User.findOne({email})
    .then(user => {
        if(!user) return res.status(400).json({ msg: 'No user with that email address was found. Please try again'});

        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({ msg: 'Sorry. That password is incorrect. Please try again'});

            jwt.sign(
                { id: user.id },
                config.jwtSecret,
                { expiresIn: 86400 },
                (err, token) => {
                    if (err) throw err;

                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            username: user.username,
                            email: user.email
                        }
                    });
                }
            ) //End of jwt.sign
        });
    });
});

//Get Current User
router.get('/me', auth, (req,res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

//update username
router.put('/update/username/:id', auth, (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(!user){ 
            res.status(404).send("Data not found");
        } else {
            user.username = req.body.username;
            user.last_updated = Date.now();

            user.save().then(user => {
                res.json({ success: true, 
                    msg: 'Username has been updated!' })
            }).catch(err => {
                res.status(400).send({ success: false, msg: 'Changes could not be made. Please try again'})
            });
        }
    });
});

//Update Name
router.put('/update/name/:id', auth, (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(!user){ 
            res.status(404).send("Data not found");
        } else {
            user.name = req.body.name;
            user.last_updated = Date.now();

            user.save().then(user => {
                res.json({ success: true, 
                    msg: 'Name has been updated!' })
            }).catch(err => {
                res.status(400).send({ success: false, msg: 'Changes could not be made. Please try again'})
            });
        }
    });
});

//Update Email
router.put('/update/email/:id', auth, (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(!user){ 
            res.status(404).send("Data not found");
        } else {
            user.email = req.body.email;
            user.last_updated = Date.now();

            user.save().then(user => {
                res.json({ success: true, 
                    msg: 'Email has been updated!' })
            }).catch(err => {
                res.status(400).send({ success: false, msg: 'Changes could not be made. Please try again'})
            });
        }
    });
});

//Update Password
router.put('/update/password/:id', auth, (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(!user){ 
            res.status(404).send("Data not found");
        } else {
            user.password = req.body.password;
            user.last_updated = Date.now();

            user.save().then(user => {
                res.json({ success: true, 
                    msg: 'Password has been updated!' })
            }).catch(err => {
                res.status(400).send({ success: false, msg: 'Changes could not be made. Please try again'})
            });
        }
    });
})

module.exports = router;