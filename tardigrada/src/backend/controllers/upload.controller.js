exports.upload = async (req, res) => {
  let upfile = req.files.upfile,
      updest = __dirname + "/../../assets/uploads/" + upfile.name;
  upfile.mv(updest, (err) => {
    if (err) { return res.status(500).send(err); }
    res.status(200).send({success: true});
  });
}