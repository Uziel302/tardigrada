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
    "users",
    {
      id: {
        type: "int",
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: "string",
        length: 40,
      },
      email: {
        type: "string",
        length: 100,
      },
      password: {
        type: "string",
        length: 100,
      },
      isFree: {
        type: "int",
        defaultValue: 0,
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
  db.dropTable("users", callback);
};

exports._meta = {
  version: 1,
};
