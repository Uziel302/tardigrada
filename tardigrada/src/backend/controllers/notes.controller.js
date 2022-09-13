const knex = require('../dbConnection');
const tableName = 'teachersNotes';


exports.saveNote = async (req, res) => {
  if(req.body.note === ''){
    req.body.note = req.body.link;
  }
  knex(tableName)
  .insert(req.body)
  .then(u => res.status(!!u?200:404).json({id:u[0]}))
  .catch(e => res.status(500).json(e));
}

exports.getNotes = async (req, res) => {
  knex(tableName)
  .select('id', 'note', 'link')
  .where({ userId: req.body.userId })
  .orderBy([{column:'id',order:'desc'}])
  .then(u => res.status(!!u?200:404).json(u))
  .catch(e => res.status(500).json(e));
}

exports.deleteNote = async (req, res) => {
  knex(tableName)
  .where('id', req.body.id)
  .del()
  .then(u => res.status(!!u?200:404).send({message: 'Success'}))
  .catch(e => res.status(500).json(e));
}
