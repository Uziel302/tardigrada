const knex = require('../dbConnection');

exports.saveToDb = async (req, res, filename) => {
  const newData = {};
  newData[req.body.uploadType] = req.body.uploadsFolder + filename;
  const whereObj =  {};
  if(req.body.tableName === 'children'){
    whereObj.id = req.body.childId;
  } else if(req.body.tableName === 'teachers'){
    whereObj.userId = req.body.userId;
  } else {
    return res.status(500).send({error: 'wrong table name'})
  }

  knex(req.body.tableName)
  .update(newData)
  .where(whereObj)
  .then(u => res.status(!!u?200:404).send({filename: req.body.uploadsFolder + filename}))
  .catch(e => res.status(500).json(e));
}

exports.upload = async (req, res) => {
  const upfile = req.files.upfile;
  const filename = Date.now() + upfile.name;
  const updest = __dirname + "/../../assets/uploads/" + filename;
  upfile.mv(updest, (err) => {
    if (err) { return res.status(500).send(err); }
    this.saveToDb(req, res, filename);
  });
}