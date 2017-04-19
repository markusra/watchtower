const tweets = require('../models/tweets.js');


const test1 = function (config) {

  this.test = (req, res) => {
    tweets.byId((err, docs) => {
      res.send(docs);
    }, "829431258199519232")
  };

  this.test2 = (req, res) => {
    tweets.inTimeFrame((err, docs) => {
      res.send(docs)
    }, "Wed Feb 15 03:46:04 +0000 2017", "Wed Feb 15 04:23:42 +0000 2017")
  };

  this.numTweetsInTimeFrame = (req, res) => {
    const start = req.query.start;
    const end = req.query.end;
    const hour_interval = req.query.interval;
    const word = req.query.word;

    if (!start || !end) {
      res.send("Must provide start and end date");
      return;
    }

    var indexes = [];
    var all_data = [];
    var all_dates = [];

    var currentDate = new Date(start)
    var current_index = 0;
    while (currentDate <= new Date(end)) {
      all_dates.push(currentDate);
      indexes.push(current_index);
      current_index += 1;
      currentDate = new Date(currentDate.getTime() + hour_interval * 60 * 60000);
    }
    indexes.pop()

    var promises = indexes.map(function (index) {
      return new Promise(function (resolve, reject) {
        tweets.byWord((err, docs) => {
          if (err) {
            return reject(err);
          }
          all_data.push([all_dates[index], all_dates[index + 1], docs.length])
          resolve();
        }, word, all_dates[index], all_dates[index + 1])
      });
    });
    Promise.all(promises)
      .then(function () {
        all_data.sort((a, b) => {
          return a[0] > b[0] ? 1 : -1;
        });
        res.send(all_data)
      })
      .catch(console.error);
  };

  this.test3 = (req, res) => {
    tweets.byWord((err, docs) => {
      res.send(docs)
    }, "brann", "Wed Feb 15 03:46:04 +0000 2016", "Wed Feb 18 04:23:42 +0000 2016")
  };

  this.tweetsByWord = (req, res) => {
    const word = req.query.word;
    const start = req.query.start;
    const end = req.query.end;
    tweets.byWord((err, docs) => {

      let tweetsWithLoc = docs.map(t => {
        const lat = t.location.latitude;
        const lng = t.location.longitude;
        return {lat, lng};
      });
      res.send(JSON.stringify({data: tweetsWithLoc}));
      //res.send(docs)
    }, word, start, end)
  };

  this.tweetLocationsInTimeframe = (req, res) => {
    const start = req.query.start;
    const end = req.query.end;

    if (!start || !end) {
      res.send("Must provide start and end date");
      return;
    }

    // check if start and end are actual dates
    tweets.inTimeFrame((err, docs) => {
      let tweetsWithLoc = docs.map(t => {
        const lat = t.location.latitude;
        const lng = t.location.longitude;
        return {lat, lng};
      });

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({data: tweetsWithLoc}));
      // res.send(tweetsWithLoc);

    }, start, end);
  };
};

module.exports.test1 = test1;
