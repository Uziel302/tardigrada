const knex = require("../dbConnection");
const tableName = "children";
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });

exports.saveChild = async (req, res) => {
  try {
    notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        firstName: {
          title: [{ type: "text", text: { content: req.body.firstName } }],
        },
        lastName: {
          rich_text: [{ text: { content: req.body.lastName } }],
        },
        fatherName: {
          rich_text: [{ text: { content: req.body.fatherName } }],
        },
        dateOfBirth: {
          rich_text: [{ text: { content: req.body.dateOfBirth } }],
        },
        className: {
          rich_text: [{ text: { content: req.body.className } }],
        },
        subjects: {
          rich_text: [{ text: { content: req.body.subjects } }],
        },
        timezone: {
          rich_text: [{ text: { content: req.body.timezone } }],
        },
        zoom: {
          rich_text: [{ text: { content: req.body.zoom } }],
        },
        device: {
          rich_text: [{ text: { content: req.body.device } }],
        },
        language: {
          rich_text: [{ text: { content: req.body.language } }],
        },
        limits: {
          rich_text: [{ text: { content: req.body.limits } }],
        },
        telegram: {
          rich_text: [{ text: { content: req.body.telegram } }],
        },
        note: {
          rich_text: [{ text: { content: req.body.note } }],
        },
      },
    });
  } catch (error) {}
  knex(tableName)
    .insert(req.body)
    .then((row) => {
      if (row > 0) {
        return res.status(200).send({ createId: row[0] });
      } else {
        return res.status(400).send({ message: "failed saving child" });
      }
    });
};

exports.getChild = async (req, res) => {
  knex(tableName)
    .where({ id: req.query.id })
    .first()
    .then((child) => {
      if (!child) {
        res.status(401).json({
          message: "failed getting child from db",
        });
      } else {
        res.status(200).json(child);
      }
    });
};

exports.getChildren = async (req, res) => {
  knex(tableName)
    .where({ userId: req.body.userId })
    .then((children) => {
      if (!children) {
        res.status(401).json({
          message: "failed getting child from db",
        });
      } else {
        res.status(200).json(children);
      }
    });
};
