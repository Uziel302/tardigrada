const express = require('express');
const router = express.Router();
const { signupValidation, loginValidation } = require('./validation');
const { login, signUp } = require('./controllers/auth.controller');
const { sendFreeRequest } = require('./controllers/admin-emails.controller');

router.post('/login', loginValidation, (req, res) => { return login(req, res); });
router.post('/signup', signupValidation, (req, res) => { return signUp(req, res); });
router.post('/freeRequest', (req, res) => { return sendFreeRequest(req, res); });
module.exports = router;
