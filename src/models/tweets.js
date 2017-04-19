const db = require('../../db');

exports.all = function (cb) {
    const collection = db.get().collection('tweets');
    collection.find().toArray((err, docs) => {
        cb(err, docs)
    })
};

exports.byWord = function (cb, word, start, end) {
    const collection = db.get().collection('tweets');
    const regex = new RegExp("(^" + word + " | " + word + " | " + word + "\\.*$)", "i");
    if (word != "") {
        collection.find({
            text: regex,
            created_at: {
                $gte: new Date(start),
                $lt: new Date(end)
            }
        }).toArray((err, docs) => {
            cb(err, docs)
        });
    } else {
        collection.find({
            created_at: {
                $gte: new Date(start),
                $lt: new Date(end)
            }
        }).toArray((err, docs) => {
            cb(err, docs)
        });
    }
};

exports.byId = function (cb, id) {
    const collection = db.get().collection('tweets');
    collection.find({id: parseInt(id)}).toArray((err, docs) => {
        cb(err, docs)
    })
};

exports.inTimeFrame = function (cb, start, end) {
    const collection = db.get().collection('tweets');
    collection.find({
        created_at: {
            $gte: new Date(start),
            $lt: new Date(end)
        }
    }).toArray((err, docs) => {
        cb(err, docs)
    })
};
