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
    "children",
    "email",
    {
      type: "string",
      length: 100,
    },
    callback
  );
  db.removeColumn("children", "fatherName", callback);
  db.removeColumn("children", "className", callback);
  db.removeColumn("children", "zoom", callback);
  db.removeColumn("children", "device", callback);
  db.removeColumn("children", "language", callback);
  db.removeColumn("children", "limits", callback);

};

exports.down = function (db, callback) {
  db.removeColumn("children", "email", callback);
  db.addColumn(
    "children",
    "fatherName",
    {
      type: "string",
      length: 40,
    },
    callback
  );
  db.addColumn(
    "children",
    "className",
    {
      type: "string",
      length: 40,
    },
    callback
  );
  db.addColumn(
    "children",
    "zoom",
    {
      type: "string",
      length: 40,
    },
    callback
  );
  db.addColumn(
    "children",
    "device",
    {
      type: "string",
      length: 100,
    },
    callback
  );
  db.addColumn(
    "children",
    "language",
    {
      type: "string",
      length: 100,
    },
    callback
  );
  db.addColumn(
    "children",
    "limits",
    {
      type: "string",
      length: 100,
    },
    callback
  );

};

exports._meta = {
  "version": 1
};
