const db = require('../../db');

exports.all = function(cb) {
    const collection = db.get().collection('tweets');

    collection.find().limit(100).toArray(function(err, docs) {
        cb(err, docs)
    })
};

exports.byId = function(cb) {
    const collection = db.get().collection('tweets');

    collection.find().toArray(function(err, docs) {
        cb(err, docs)
    })
};