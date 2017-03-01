
var mockRepo = require('./../repository/mock_maprepo.js');
const tweets1 = require('../models/tweets.js');

var test1 = function(config) {
    this.mockRepo = new mockRepo.mapRepo(config);
    
    this.test = (req, res) => {
        tweets1.all(function(err, docs) {
            res.send(docs);
        })
    };

    this.tweetLocationsInTimeframe = (req, res) => {
        var start = req.query.start;
        var end = req.query.end;

        if (!start || !end) {
            res.send("Must provide start and end date");
            return;
        }

        // check if start and end are actual dates

        tweets = this.mockRepo.tweetsTimeSpace(start, end);
        console.log("start: "+ start + " end: " + end)
        // only get locations

        var tweetsWithLoc = tweets.map( t => {
            var lat = t.location.latitude;
            var lng = t.location.longitude;
            return {lat, lng};
        });

        res.send(tweetsWithLoc);
    };
};

module.exports.test1 = test1;
