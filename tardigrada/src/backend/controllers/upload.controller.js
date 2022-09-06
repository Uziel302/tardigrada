const knex = require('../dbConnection');

exports.saveToDb = async (req, res, filename) => {
  const newData = {};
  newData[req.body.uploadType] = filename;
  knex("children")
  .update(newData)
  .where({ id: req.body.childId })
  .then(u => res.status(!!u?200:404).send({filename}))
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