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
  db.removeColumn("users", "name", callback);
  db.removeColumn("users", "isFree", callback);
  db.addColumn(
    "users",
    "firstName",
    {
      type: "string",
      length: 40,
    },
    callback
  );
  db.addColumn(
    "users",
    "lastName",
    {
      type: "string",
      length: 40,
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.removeColumn("users", "firstName", callback);
  db.removeColumn("users", "lastName", callback);
  db.addColumn(
    "users",
    "name",
    {
      type: "string",
      length: 40,
    },
    callback
  );
  db.addColumn(
    "users",
    "isFree",
    {
      type: "int",
      defaultValue: 0,
    },
    callback
  );
};

exports._meta = {
  version: 1,
};
