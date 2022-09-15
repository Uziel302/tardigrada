"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    "children",
    {
      id: {
        type: "int",
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: "string",
        length: 40,
      },
      lastName: {
        type: "string",
        length: 40,
      },
      fatherName: {
        type: "string",
        length: 40,
      },
      dateOfBirth: {
        type: "string",
        length: 40,
      },
      className: {
        type: "string",
        length: 40,
      },
      subjects: {
        type: "string",
        length: 200,
      },
      timezone: {
        type: "string",
        length: 40,
      },
      zoom: {
        type: "string",
        length: 40,
      },
      device: {
        type: "string",
        length: 100,
      },
      language: {
        type: "string",
        length: 100,
      },
      limits: {
        type: "string",
        length: 100,
      },
      telegram: {
        type: "string",
        length: 40,
      },
      note: {
        type: "string",
        length: 1000,
      },
      userId: {
        type: "int",
      },
      creation: {
        type: "timestamp",
        defaultValue: new String("CURRENT_TIMESTAMP"),
      },
    },
    function (err) {
      if (err) return callback(err);
      return callback();
    }
  );
};

exports.down = function (db, callback) {
  db.dropTable("children", callback);
};

exports._meta = {
  version: 1,
};
