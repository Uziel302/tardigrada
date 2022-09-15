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
  if(req.body.chwId){
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
  } else{
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

exports.getHomework = async (req, res) => {
  knex(tableName)
    .select("text", "file")
    .where("lectureId", req.query.id)
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
      "hw.text as hwText",
      "hw.file as hwFile",
      "chw.id as chwId",
      "chw.text as chwText",
      "chw.file as chwFile",
      "chw.feedbackText as fhwText",
      "chw.feedbackFile as fhwFile"
    )
    .leftJoin("childrenHomework as chw", "hw.id", "chw.homeworkId")
    .where("hw.lectureId", req.query.id)
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
