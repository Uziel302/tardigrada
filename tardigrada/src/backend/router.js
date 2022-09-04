const express = require('express');
const router = express.Router();
const { signupAndValidation, loginAndValidation } = require('./validation');
const { sendFreeRequest } = require('./controllers/admin-emails.controller');
const { saveChild } = require('./controllers/studentData.controller');
const checkAuth = require('./middleware/check-auth');

router.post('/api/login', loginAndValidation);
router.post('/api/signup', signupAndValidation);
router.post('/api/freeRequest', (req, res) => { return sendFreeRequest(req, res); });
router.post('/api/saveChild', (req, res) => { 
  if(checkAuth(req, res)){
    return saveChild(req, res); 
  }
});
module.exports = router;
