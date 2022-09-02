const express = require('express');
const router = express.Router();
const { signupValidation, loginValidation } = require('./validation');
const { login, signUp } = require('./controllers/auth.controller');
const { sendFreeRequest } = require('./controllers/admin-emails.controller');
const { saveChild } = require('./controllers/studentData.controller');
const checkAuth = require('./middleware/check-auth');

router.post('/api/login', loginValidation, (req, res) => { return login(req, res); });
router.post('/api/signup', signupValidation, (req, res) => { return signUp(req, res); });
router.post('/api/freeRequest', (req, res) => { return sendFreeRequest(req, res); });
router.post('/api/saveChild', (req, res) => { 
  if(checkAuth(req, res)){
    return saveChild(req, res); 
  }
});
module.exports = router;
