const knex = require('../dbConnection');
const tableName = 'lectures';

exports.getLectures = async (req, res) => {
  knex(tableName)
  .then((lectures) => {
    if (!lectures) {
      res.status(401).json({
        message: 'failed getting lectures from db',
      });
    } else {
      res.status(200).json(lectures);
    }
  });
}

exports.joinLecture = async (req, res) => {
  knex('lecturesChildren')
  .insert(req.body)
  .then((lecturesChild) => {
    if (!lecturesChild) {
      res.status(401).json({
        message: 'failed saving lecturesChild to db',
      });
    } else {
      res.status(200).json({success: true});
    }
  });
}