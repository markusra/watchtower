
var mockRepo = require('./../repository/mock_maprepo.js')

var test1 = function(config) {
    this.mockRepo = new mockRepo.mapRepo(config)
    
    this.test = (req, res) => {
        tweets = this.mockRepo.allTweets();
        res.send(tweets);
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
