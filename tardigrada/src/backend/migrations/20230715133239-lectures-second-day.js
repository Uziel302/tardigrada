'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.addColumn(
    "lectures",
    "day2",
    {
      type: "int",
    },
    callback
  );
  db.addColumn(
    "lectures",
    "hour2",
    {
      type: "int",
    },
    callback
  );
  db.addColumn(
    "lectures",
    "minutes2",
    {
      type: "int",
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.removeColumn("lectures", "day2", callback);
  db.removeColumn("lectures", "hour2", callback);
  db.removeColumn("lectures", "minutes2", callback);
};

exports._meta = {
  "version": 1
};
