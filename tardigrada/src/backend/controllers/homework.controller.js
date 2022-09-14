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
