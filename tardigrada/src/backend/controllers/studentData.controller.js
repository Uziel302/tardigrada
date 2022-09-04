const express = require('express');
const knex = require('../dbConnection');
const tableName = 'children';
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });

exports.saveChild = async (req, res) => {
  notion.pages.create({
    parent: { database_id: process.env.NOTION_DATABASE_ID },
    properties: {
      Name: {
        title: [{ type: "text", text: { content: 'ff' } }],
      },
      "Issue Number": {
        number: 3,
      },
      State: {
        select: { name: 'eee' },
      },
      "Number of Comments": {
        number: 33,
      },
      "Issue URL": {
        url: 'http://google.com',
      },
    },
  });
  knex(tableName)
  .insert(req.body)
  .then((row) => {
    if (row > 0) {
    return res
      .status(200)
      .send({message: 'New child was saved'});
    } else {
      return res.status(400).send({message: 'failed saving child'});
    }
  });
}