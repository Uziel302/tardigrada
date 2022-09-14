const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const { signupAndValidation, loginAndValidation } = require("./validation");
const { sendFreeRequest } = require("./controllers/admin-emails.controller");
const {
  getChild,
  getChildren,
  saveChild,
} = require("./controllers/studentData.controller");
const checkAuth = require("./middleware/check-auth");
const { upload } = require("./controllers/upload.controller");
const {
  saveNote,
  getNotes,
  deleteNote,
} = require("./controllers/notes.controller");
const { loadOrCreateTeacher } = require("./controllers/teacherData.controller");
const {
  getLectures,
  joinLecture,
  leaveLecture,
  getChildLectures,
  saveStationery,
} = require("./controllers/lectures.controller");
const { saveAnnoying, getAnnoying } = require("./controllers/admin-changes.controller")

router.post("/api/login", loginAndValidation);
router.post("/api/signup", signupAndValidation);
router.get("/api/getLectures", getLectures);
router.post("/api/getChildLectures", getChildLectures);
router.post("/api/saveStationery", saveStationery);

//TODO - authenticate before saving annoying message
router.post("/api/saveAnnoying", saveAnnoying);
router.get("/api/getAnnoying", getAnnoying);

router.post("/api/joinLecture", joinLecture);
router.post("/api/leaveLecture", leaveLecture);
router.post("/api/freeRequest", (req, res) => {
  return sendFreeRequest(req, res);
});
router.get("/api/notes", (req, res) => {
  if (checkAuth(req, res)) {
    return getNotes(req, res);
  }
});

router.post("/api/saveNote", (req, res) => {
  if (checkAuth(req, res)) {
    return saveNote(req, res);
  }
});

router.post("/api/deleteNote", (req, res) => {
  if (checkAuth(req, res)) {
    return deleteNote(req, res);
  }
});

router.post("/api/saveChild", (req, res) => {
  if (checkAuth(req, res)) {
    return saveChild(req, res);
  }
});

router.get("/api/getChild", (req, res) => {
  if (checkAuth(req, res)) {
    return getChild(req, res);
  }
});

router.get("/api/getChildren", (req, res) => {
  if (checkAuth(req, res)) {
    return getChildren(req, res);
  }
});

router.get("/api/loadOrCreateTeacher", (req, res) => {
  if (checkAuth(req, res)) {
    return loadOrCreateTeacher(req, res);
  }
});

router.use(fileUpload());
router.post("/api/upload", (req, res) => {
  if (checkAuth(req, res)) {
    return upload(req, res);
  }
});

module.exports = router;
