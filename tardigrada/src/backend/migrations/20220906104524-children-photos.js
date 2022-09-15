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
    "children",
    "cover",
    {
      type: "string",
      length: 100,
    },
    callback
  );
  db.addColumn(
    "children",
    "profile",
    {
      type: "string",
      length: 100,
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.removeColumn("children", "cover", callback);
  db.removeColumn("children", "profile", callback);
};

exports._meta = {
  version: 1,
};
