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
    "stationeryText",
    {
      type: "string",
      length: 100,
    },
    callback
  );
  db.addColumn(
    "lectures",
    "stationeryFile",
    {
      type: "string",
      length: 1000,
    },
    callback
  );
  db.addColumn(
    "lectures",
    "book",
    {
      type: "string",
      length: 100,
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.removeColumn("lectures", "stationeryText", callback);
  db.removeColumn("lectures", "stationeryFile", callback);
  db.removeColumn("lectures", "book", callback);
};

exports._meta = {
  version: 1,
};
