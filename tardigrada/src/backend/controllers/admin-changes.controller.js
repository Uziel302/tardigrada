const knex = require("../dbConnection");

exports.saveAnnoying = async (req, res) => {
  knex("annoying")
    .insert(req.body)
    .then((u) => res.status(!!u ? 200 : 404).json({ id: u[0] }))
    .catch((e) => res.status(500).json(e));
};

exports.getAnnoying = async (req, res) => {
  knex("annoying")
    .orderBy([{ column: "id", order: "desc" }])
    .limit(1)
    .then((u) => res.status(!!u ? 200 : 404).json(u[0]))
    .catch((e) => res.status(500).json(e));
};
