const express = require('express');
const router = express.Router();
const fileUpload = require("express-fileupload");
const { signupAndValidation, loginAndValidation } = require('./validation');
const { sendFreeRequest } = require('./controllers/admin-emails.controller');
const { getChild, getChildren, saveChild } = require('./controllers/studentData.controller');
const checkAuth = require('./middleware/check-auth');
const { upload } = require('./controllers/upload.controller');
const { saveNote, getNotes, deleteNote } = require('./controllers/notes.controller');

router.post('/api/login', loginAndValidation);
router.post('/api/signup', signupAndValidation);
router.post('/api/freeRequest', (req, res) => { return sendFreeRequest(req, res); });
router.get('/api/notes', (req, res) => { 
  if(checkAuth(req, res)){
    return getNotes(req, res);
  }
});

router.post('/api/saveNote', (req, res) => { 
  if(checkAuth(req, res)){
    return saveNote(req, res);
  }
});

router.post('/api/deleteNote', (req, res) => { 
  if(checkAuth(req, res)){
    return deleteNote(req, res);
  }
});

router.post('/api/saveChild', (req, res) => { 
  if(checkAuth(req, res)){
    return saveChild(req, res); 
  }
});

router.get('/api/getChild', (req, res) => { 
  if(checkAuth(req, res)){
    return getChild(req, res); 
  }
});

router.get('/api/getChildren', (req, res) => { 
  if(checkAuth(req, res)){
    return getChildren(req, res); 
  }
});

router.use(fileUpload());
router.post("/api/upload", (req, res) => { return upload(req, res);});
module.exports = router;
