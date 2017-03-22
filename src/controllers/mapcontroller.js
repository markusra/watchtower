const tweets = require('../models/tweets.js');


const test1 = function(config) {

    this.test = (req, res) => {
        tweets.byId( (err, docs) => {
            res.send(docs);
        }, "829431258199519232")
    };

    this.test2 = (req, res) => {
        tweets.inTimeFrame( (err, docs) => {
            res.send(docs)
        }, "Wed Feb 15 03:46:04 +0000 2017", "Wed Feb 15 04:23:42 +0000 2017")
    };

    this.test3 = (req, res) => {
        tweets.byWord( (err, docs) => {
            res.send(docs)
        }, "brann")
    };


    this.tweetLocationsInTimeframe = (req, res) => {
        const start = req.query.start;
        const end = req.query.end;

        if (!start || !end) {
            res.send("Must provide start and end date");
            return;
        }

        // check if start and end are actual dates
        tweets.inTimeFrame( (err, docs) => {
            let tweetsWithLoc = docs.map( t => {
                const lat = t.location.latitude;
                const lng = t.location.longitude;
                return {lat, lng};
            });

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ data: tweetsWithLoc }));
            // res.send(tweetsWithLoc);

        }, start, end);
    };
};

module.exports.test1 = test1;
