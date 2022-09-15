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
    "childrenHomework",
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
      homeworkId: {
        type: "int",
      },
      text: {
        type: "string",
        length: 1000,
      },
      file: {
        type: "string",
        length: 1000,
      },
      feedbackText: {
        type: "string",
        length: 1000,
      },
      feedbackFile: {
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
  db.dropTable("childrenHomework", callback);
};

exports._meta = {
  version: 1,
};
