const express = require('express');
const router = express.Router();
const { signupValidation, loginValidation } = require('./validation');
const { login, signUp } = require('./controllers/auth.controller');

router.post('/login', loginValidation, (req, res) => { return login(req, res); });
router.post('/signup', signupValidation, (req, res) => { return signUp(req, res); });
module.exports = router;
