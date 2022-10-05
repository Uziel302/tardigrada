const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const { signupAndValidation, loginAndValidation } = require("./validation");
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
  getLectureChildren,
  getTeacherLectures,
  saveStationery,
  getPersonalSlots,
  savePersonalSlot,
} = require("./controllers/lectures.controller");
const {
  saveAnnoying,
  getAnnoying,
} = require("./controllers/admin-changes.controller");
const {
  getHomework,
  getHomeworks,
  saveHomework,
  saveHwResponse,
  saveHwFeedback,
} = require("./controllers/homework.controller");

router.post("/login", loginAndValidation);
router.post("/signup", signupAndValidation);
router.get("/getLectures", getLectures);
router.get("/getLectureChildren", getLectureChildren);
router.get("/getTeacherLectures", getTeacherLectures);
router.get("/getChildLectures", getChildLectures);
router.post("/saveStationery", saveStationery);
router.post("/savePersonalSlot", savePersonalSlot);
router.get("/getPersonalSlots", getPersonalSlots);
router.get("/homework", getHomework);
router.get("/homeworks", getHomeworks);
router.post("/saveHomework", saveHomework);
router.post("/saveHwResponse", saveHwResponse);
router.post("/saveHwFeedback", saveHwFeedback);

//TODO - authenticate before saving annoying message
router.post("/saveAnnoying", saveAnnoying);
router.get("/getAnnoying", getAnnoying);

router.post("/joinLecture", joinLecture);
router.post("/leaveLecture", leaveLecture);
router.get("/notes", (req, res) => {
  if (checkAuth(req, res)) {
    return getNotes(req, res);
  }
});

router.post("/saveNote", (req, res) => {
  if (checkAuth(req, res)) {
    return saveNote(req, res);
  }
});

router.post("/deleteNote", (req, res) => {
  if (checkAuth(req, res)) {
    return deleteNote(req, res);
  }
});

router.post("/saveChild", (req, res) => {
  if (checkAuth(req, res)) {
    return saveChild(req, res);
  }
});

router.get("/getChild", (req, res) => {
  if (checkAuth(req, res)) {
    return getChild(req, res);
  }
});

router.get("/getChildren", (req, res) => {
  if (checkAuth(req, res)) {
    return getChildren(req, res);
  }
});

router.get("/loadOrCreateTeacher", (req, res) => {
  if (checkAuth(req, res)) {
    return loadOrCreateTeacher(req, res);
  }
});

router.use(fileUpload());
router.post("/upload", (req, res) => {
  if (checkAuth(req, res)) {
    return upload(req, res);
  }
});

module.exports = router;
