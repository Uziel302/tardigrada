const express = require('express');
const knex = require('../dbConnection');
const tableName = 'children';

exports.saveChild = async (req, res) => {
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