const knex = require("../dbConnection");
const tableName = "homework";

exports.saveHomework = async (req, res) => {
  knex(tableName)
    .insert(req.body)
    .then((homework) => {
      if (!homework) {
        res.status(401).json({
          message: "failed saving homework to db",
        });
      } else {
        res.status(200).json(homework);
      }
    });
};

exports.saveHwResponse = async (req, res) => {
  if (req.body.chwId) {
    delete req.body.chwId;
    knex("childrenHomework")
      .update(req.body)
      .then((hwResponse) => {
        if (!hwResponse) {
          res.status(401).json({
            message: "failed saving hwResponse to db",
          });
        } else {
          res.status(200).json(hwResponse);
        }
      });
  } else {
    delete req.body.chwId;
    knex("childrenHomework")
      .insert(req.body)
      .then((hwResponse) => {
        if (!hwResponse) {
          res.status(401).json({
            message: "failed saving hwResponse to db",
          });
        } else {
          res.status(200).json(hwResponse);
        }
      });
  }
};

exports.saveHwFeedback = async (req, res) => {
  knex("childrenHomework")
    .update({ feedbackText: req.body.text, feedbackFile: req.body.file })
    .then((hwFeedback) => {
      if (!hwFeedback) {
        res.status(401).json({
          message: "failed saving feedback to db",
        });
      } else {
        res.status(200).json(hwFeedback);
      }
    });
};

exports.getHomework = async (req, res) => {
  knex(tableName)
    .select("text", "file")
    .where("lectureId", req.query.lectureId)
    .orderBy([{ column: "id", order: "desc" }])
    .limit(1)
    .then((homework) => {
      if (!homework) {
        res.status(401).json({
          message: "failed getting homework from db",
        });
      } else {
        res.status(200).json(homework[0]);
      }
    });
};

exports.getHomeworks = async (req, res) => {
  knex("homework as hw")
    .select(
      "hw.id as id",
      "hw.lectureId as lectureId",
      "hw.text as hwText",
      "hw.file as hwFile",
      "chw.id as chwId",
      "chw.text as chwText",
      "chw.file as chwFile",
      "chw.feedbackText as fhwText",
      "chw.feedbackFile as fhwFile"
    )
    .leftJoin("childrenHomework as chw", {
      "hw.id": "chw.homeworkId",
      "chw.childId": knex.raw("?", [req.query.childId]),
    })
    .whereIn("hw.lectureId", JSON.parse("[" + req.query.lectureId + "]"))
    .orderBy([{ column: "hw.id", order: "desc" }])
    .then((homeworks) => {
      if (!homeworks) {
        res.status(401).json({
          message: "failed getting homeworks from db",
        });
      } else {
        res.status(200).json(homeworks);
      }
    });
};
