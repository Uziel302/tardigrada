const knex = require("../dbConnection");
const tableName = "teachers";

exports.loadOrCreateTeacher = async (req, res) => {
  knex(tableName)
    .select("userId", "name", "cover", "profile", "timezone")
    .where({ userId: req.body.userId })
    .first()
    .then((teacher) => {
      if (!teacher) {
        knex("users")
          .select("firstName", "lastName")
          .where({ id: req.body.userId })
          .first()
          .then((teacher) => {
            const newTeacher = {
              userId: req.body.userId,
              name: teacher.firstName + " " + teacher.lastName,
              cover: "",
              profile: "",
            };
            knex(tableName)
              .insert(newTeacher)
              .then((row) => {
                if (row) {
                  return res.status(200).send(newTeacher);
                } else {
                  return res
                    .status(400)
                    .send({ message: "failed saving teacher" });
                }
              });
          });
      } else {
        res.status(200).json(teacher);
      }
    });
};


exports.getTeachers = async (req, res) => {
  knex(tableName)
  .whereNotNull('about')
  .whereNotNull('profile')
  .orderBy('profile')
    .then((teachers) => {
      if (!teachers) {
        return res
          .status(400)
          .send({ message: "failed getting teachers" });
      } else {
        res.status(200).json(teachers);
      }
    });
};