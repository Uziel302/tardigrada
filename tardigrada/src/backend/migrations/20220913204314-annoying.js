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


exports.up = function(db, callback) {
  db.createTable('annoying', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: 'string',
      length: 100
    },
    color: {
      type: 'string',
      length: 40
    },
    size: {
      type: 'string',
      length: 40
    },
    creation: {
      type: 'timestamp',
      defaultValue: new String('CURRENT_TIMESTAMP')
    }
  }, function(err) {
    if (err) return callback(err);
    return callback();
  });
};

exports.down = function(db, callback) {
  db.dropTable('annoying', callback);
};

exports._meta = {
  "version": 1
};
