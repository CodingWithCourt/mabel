const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Inserting User
router.post('/register', (req, res, next) => {
    const user = new User(req.body);
    user.save().then(
        (result) => {
            res.json(result);
        }
    ).catch(err => next(err));
});

module.exports = router;