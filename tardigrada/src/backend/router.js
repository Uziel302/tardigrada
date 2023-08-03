const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const { signupAndValidation, loginAndValidation } = require("./validation");
const {
  getChild,
  getChildren,
  saveChild,
  createNewStudent,
} = require("./controllers/studentData.controller");
const checkAuth = require("./middleware/check-auth");
const { upload } = require("./controllers/upload.controller");
const {
  saveNote,
  getNotes,
  deleteNote,
} = require("./controllers/notes.controller");
const {
  loadTeacher,
  getTeachers,
} = require("./controllers/teacherData.controller");
const {
  getLectures,
  getCourse,
  getCourseReviews,
  submitReview,
  submitLike,
  joinLecture,
  leaveLecture,
  getChildLectures,
  getLectureChildren,
  getTeacherLectures,
  saveStationery,
  getPersonalSlots,
  savePersonalSlot,
  saveUserTz,
  updateLecture,
  createEmptyLecture,
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
const { paymentLink } = require("./controllers/payment.controller");

router.post("/login", loginAndValidation);
router.post("/signup", signupAndValidation);
router.post("/paymentLink", paymentLink);
router.get("/course", getCourse);
router.get("/reviews", getCourseReviews);
router.post("/submitReview", submitReview);
router.post("/submitLike", submitLike);
router.get("/getLectures", getLectures);
router.get("/getLectureChildren", getLectureChildren);
router.get("/getTeacherLectures", getTeacherLectures);
router.get("/getTeachers", getTeachers);
router.get("/getChildLectures", getChildLectures);
router.post("/saveStationery", saveStationery);
router.post("/savePersonalSlot", savePersonalSlot);
router.post("/saveUserTz", saveUserTz);
router.post("/updateLecture", updateLecture);
router.post("/createEmptyLecture", createEmptyLecture);
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

router.get("/createNewStudent", (req, res) => {
  if (checkAuth(req, res)) {
    return createNewStudent(req, res);
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

router.get("/loadTeacher", (req, res) => {
  if (checkAuth(req, res)) {
    return loadTeacher(req, res);
  }
});

router.use(fileUpload());
router.post("/upload", (req, res) => {
  if (checkAuth(req, res)) {
    return upload(req, res);
  }
});

router.post("/sendEmail", (req, res) => {
  const Sib = require("sib-api-v3-sdk");
  require("dotenv").config();
  const client = Sib.ApiClient.instance;
  const apiKey = client.authentications["api-key"];
  apiKey.apiKey = process.env.API_KEY;
  const tranEmailApi = new Sib.TransactionalEmailsApi();
  const sender = {
    email: req.body.from,
  };
  const receivers = [
    {
      email: "nomadic.tardigrade@gmail.com",
    },
  ];

  tranEmailApi
    .sendTransacEmail({
      sender,
      to: receivers,
      subject: req.body.title,
      textContent: "message: " + req.body.message,
      //htmlContent: `<h1>html content</h1>`,
      params: {
        role: "Frontend",
      },
    })
    .then(console.log)
    .catch(console.log);
  res.status(200).json("email was send successfully");
});

module.exports = router;
