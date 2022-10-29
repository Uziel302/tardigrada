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
    "reviews",
    {
      id: {
        type: "int",
        primaryKey: true,
        autoIncrement: true,
      },
      lectureId: {
        type: "int",
      },
      childId: {
        type: "int",
      },
      name: {
        type: "string",
        length: 100,
      },
      stars: {
        type: "int",
      },
      content: {
        type: "string",
        length: 1000,
      },
      likers: {
        type: "string",
        length: 100,
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
  db.dropTable("reviews", callback);
};

exports._meta = {
  version: 1,
};
