const knex = require("../dbConnection");
const tableName = "teachers";

exports.loadTeacher = async (req, res) => {
  knex(tableName)
    .select("userId", "name", "cover", "profile", "timezone")
    .where({ userId: req.body.userId })
    .first()
    .then((teacher) => {
      res.status(200).json(teacher);
    });
};

exports.getTeachers = async (req, res) => {
  knex(tableName)
    .whereNotNull("about")
    .whereNotNull("profile")
    .orderBy("profile")
    .then((teachers) => {
      if (!teachers) {
        return res.status(400).send({ message: "failed getting teachers" });
      } else {
        res.status(200).json(teachers);
      }
    });
};
