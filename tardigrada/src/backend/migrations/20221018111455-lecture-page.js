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
    "image",
    {
      type: "string",
      length: 100,
    },
    callback
  );
  db.addColumn(
    "lectures",
    "level",
    {
      type: "string",
      length: 100,
    },
    callback
  );
  db.addColumn(
    "lectures",
    "description",
    {
      type: "string",
      length: 5000,
    },
    callback
  );
  db.addColumn(
    "lectures",
    "bullets",
    {
      type: "string",
      length: 1000,
    },
    callback
  );
  db.changeColumn(
    "teachers",
    "about",
    {
      type: "string",
      length: 1000,
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.removeColumn("lectures", "image", callback);
  db.removeColumn("lectures", "level", callback);
  db.removeColumn("lectures", "description", callback);
  db.removeColumn("lectures", "bullets", callback);
  db.changeColumn(
    "teachers",
    "about",
    {
      type: "string",
      length: 300,
    },
    callback
  );
};

exports._meta = {
  version: 1,
};
