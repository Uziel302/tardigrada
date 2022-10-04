const knex = require("../dbConnection");
const tableName = "lectures";

exports.getLectures = async (req, res) => {
  knex(tableName).then((lectures) => {
    if (!lectures) {
      res.status(401).json({
        message: "failed getting lectures from db",
      });
    } else {
      res.status(200).json(lectures);
    }
  });
};

exports.getLectureChildren = async (req, res) => {
  knex("lecturesChildren as lc")
    .select("c.*")
    .where({ lectureId: req.query.lectureId })
    .join("children as c", "c.id", "lc.childId")
    .then((lectureChildren) => {
      if (!lectureChildren) {
        res.status(401).json({
          message: "failed getting lectures of children from db",
        });
      } else {
        res.status(200).json(lectureChildren);
      }
    });
};

exports.getTeacherLectures = async (req, res) => {
  knex(tableName)
    .where({ teacherId: req.query.teacherId })
    .then((lectures) => {
      if (!lectures) {
        res.status(401).json({
          message: "failed getting lectures from db",
        });
      } else {
        res.status(200).json(lectures);
      }
    });
};

exports.getChildLectures = async (req, res) => {
  knex("lecturesChildren as lc")
    .join("lectures as l", "l.id", "lc.lectureId")
    .where({ childId: req.query.childId })
    .then((childLectures) => {
      if (!childLectures) {
        res.status(401).json({
          message: "failed getting lectures of child from db",
        });
      } else {
        res.status(200).json(childLectures);
      }
    });
};

exports.joinLecture = async (req, res) => {
  knex("lecturesChildren")
    .insert(req.body)
    .then((lecturesChild) => {
      if (!lecturesChild) {
        res.status(401).json({
          message: "failed saving lecturesChild to db",
        });
      } else {
        res.status(200).json({ success: true });
      }
    });
};

exports.leaveLecture = async (req, res) => {
  knex("lecturesChildren")
    .where({ childId: req.body.childId, lectureId: req.body.lectureId })
    .del()
    .then((lecturesChild) => {
      if (!lecturesChild) {
        res.status(401).json({
          message: "failed deleting lecturesChild from db",
        });
      } else {
        res.status(200).json({ success: true });
      }
    });
};

exports.saveStationery = async (req, res) => {
  knex(tableName)
    .update({
      stationeryText: req.body.stationeryText,
      stationeryFile: req.body.stationeryFile,
    })
    .where({ id: req.body.lectureId })
    .then((u) => res.status(!!u ? 200 : 404).send({ success: true }))
    .catch((e) => res.status(500).json(e));
};

exports.savePersonalSlot = async (req, res) => {
  if (req.body.userId) {
    req.body.childId = 0;
  }
  if (req.body.isUpdate) {
    delete req.body.isUpdate;
    knex("personalSlots")
      .update(req.body)
      .where({
        childId: req.body.childId,
        userId: req.body.userId,
        day: req.body.day,
        hour: req.body.hour,
      })
      .then((u) => res.status(!!u ? 200 : 404).send({ success: true }))
      .catch((e) => res.status(500).json(e));
  } else {
    delete req.body.isUpdate;
    knex("personalSlots")
      .insert(req.body)
      .then((u) => res.status(!!u ? 200 : 404).send({ success: true }))
      .catch((e) => res.status(500).json(e));
  }
};

exports.getPersonalSlots = async (req, res) => {
  let whereObj = {};
  if (req.query.childId) {
    whereObj.childId = req.query.childId;
  } else {
    whereObj.userId = req.query.userId;
  }
  knex("personalSlots")
    .where(whereObj)
    .then((personalSlots) => {
      if (!personalSlots) {
        res.status(401).json({
          message: "failed getting lectures of child from db",
        });
      } else {
        res.status(200).json(personalSlots);
      }
    });
};
