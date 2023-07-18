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
  db.addColumn(
    "lectures",
    "duration",
    {
      type: "int",
    },
    callback
  );
  db.addColumn(
    "lectures",
    "duration2",
    {
      type: "int",
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.removeColumn("lectures", "duration", callback);
  db.removeColumn("lectures", "duration2", callback);
};

exports._meta = {
  version: 1,
};
