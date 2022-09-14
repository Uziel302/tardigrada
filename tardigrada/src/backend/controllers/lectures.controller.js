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

exports.getChildLectures = async (req, res) => {
  knex("lecturesChildren")
    .where({ childId: req.body.childId })
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
