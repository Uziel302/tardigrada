const knex = require('../dbConnection');
const tableName = 'teachers';

exports.loadOrCreateTeacher = async (req, res) => {
  knex(tableName)
  .select('userId', 'name', 'cover', 'profile')
  .where({ userId: req.body.userId })
  .first()
  .then((teacher) => {
    if (!teacher) {
      knex('users')
      .select('name')
      .where({ id: req.body.userId })
      .first()
      .then((teacher) => {
        const newTeacher = {userId: req.body.userId, name: teacher.name, cover: '', profile: ''};
        knex(tableName)
        .insert(newTeacher)
        .then((row) => {
          if (row) {
            return res
              .status(200)
              .send(newTeacher);
        } else {
            return res.status(400).send({message: 'failed saving teacher'});
          }
        });
      });
    } else {
      res.status(200).json(teacher);
    }
  });
}