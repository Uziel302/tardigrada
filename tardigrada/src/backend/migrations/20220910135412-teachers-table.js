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
  db.createTable('teachers', {
    userId: {
      type: 'int',
      primaryKey: true,
    },
    name: {
      type: 'string',
      length: 40
    },
    about: {
      type: 'string',
      length: 300
    },
    cover: {
      type: 'string',
      length: 100
    },
    profile: {
      type: 'string',
      length: 100
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
  db.dropTable('teachers', callback);
};

exports._meta = {
  "version": 1
};
