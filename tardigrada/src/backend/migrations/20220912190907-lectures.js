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
  db.createTable('lectures', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: 'string',
      length: 40
    },
    subtitle: {
      type: 'string',
      length: 40
    },
    teacherName: {
      type: 'string',
      length: 40
    },
    teacherId: {
      type: 'int'
    },
    hour: {
      type: 'int'
    },
    minutes: {
      type: 'int'
    },
    day: {
      type: 'int'
    },
    minAge: {
      type: 'int'
    },
    maxAge: {
      type: 'int'
    },
    background: {
      type: 'string',
      length: 40
    },
    telegram: {
      type: 'string',
      length: 100
    },
    zoom: {
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
  db.dropTable('lectures', callback);
};

exports._meta = {
  "version": 1
};
