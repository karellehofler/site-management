const express = require('express');
const router = express.Router();
const config = require('../../config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

router.get('/', async(req, res) => {
    User.find({})
    .exec((err, users) => {
        if(err) throw console.log(err);
        res.json(users);
    })
})