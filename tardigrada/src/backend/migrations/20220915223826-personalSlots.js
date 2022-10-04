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
    "personalSlots",
    {
      id: {
        type: "int",
        primaryKey: true,
        autoIncrement: true,
      },
      childId: {
        type: "int",
      },
      userId: {
        type: "int",
      },
      day: {
        type: "int",
      },
      hour: {
        type: "int",
      },
      text: {
        type: "string",
        length: 1000,
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
  db.dropTable("personalSlots", callback);
};

exports._meta = {
  version: 1,
};
