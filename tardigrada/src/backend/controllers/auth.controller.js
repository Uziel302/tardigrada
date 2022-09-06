const express = require('express');
const knex = require('../dbConnection');
const tableName = 'users';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  knex(tableName)
    .where({ name: req.body.name })
    .orWhere({ email: req.body.name })
    .first()
    .then((user) => {
      if (!user) {
        res.status(401).json({
          message: 'Wrong name or password', // wrong name
        });
      } else {
        //get child of the logged in user
        this.getChildrenById(user.id).then(
          (childId) => {
            return bcrypt
            .compare(req.body.password, user.password)
            .then((isAuthenticated) => {
              if (!isAuthenticated) {
                res.status(401).json({
                  message: 'Wrong name or password', // wrong password
                });
              } else {
                const token = jwt.sign(
                  { email: user.email, userId: user.id },
                  'secret_this_should_be_longer',
                  { expiresIn: '24h' }
                );
                res.status(200).json({
                  token: token,
                  expiresIn: 86400,
                  msg: 'Logged in!',
                  childId,
                });
              }
            });
          }
        );
      }
    });
};

exports.signUp = async (req, res) => {
  knex(tableName)
    .where({ email: req.body.email })
    .first()
    .then((user) => {
      if (user) {
        return res.status(401).send({ message: 'user already exists' });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else {
            req.body.password = hash;
            knex('users')
              .insert(req.body)
              .then((row) => {
                if (row > 0) {
                  return res
                    .status(200)
                    .send({ message: 'New user was created' });
                } else {
                  return res.status(200).send('error on data insert');
                }
              });
          }
        });
      }
    });
};

exports.getChildrenById = async (userId) => {
  return knex.select()
  .from('children')
  .where({ userId })
  .orderBy([{column:'id',order:'desc'}])
  .limit(1)
  .then((child) => {
    if (child) {
      return child[0].id;
    }
    return 0;
  });
}