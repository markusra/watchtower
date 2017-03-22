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
    this.numTweetsInTimeFrame = (req, res) => {

      const start = req.query.start;
      const end = req.query.end;
      const hour_interval = req.query.interval;

      if (!start || !end) {
          res.send("Must provide start and end date");
          return;
      }

      var indexes = [];
      var all_data = [];
      var all_dates = [];

      //var hour_interval = 8;

      var currentDate = new Date(start)

      console.log("start of while loops");
      var current_index = 0;
      while (currentDate <= new Date(end)) {
          all_dates.push(currentDate);
          indexes.push(current_index);
          current_index += 1;
          currentDate = new Date(currentDate.getTime() + hour_interval*60*60000);
      }
      indexes.pop()

      console.log("all dates: ");
      console.log(all_dates);
      console.log(indexes);

      var promises = indexes.map(function(index) {
          return new Promise(function(resolve, reject) {
              tweets.inTimeFrame( (err, docs) => {
                  if (err) {
                      return reject(err);
                  }
                  all_data.push([all_dates[index], all_dates[index+1], docs.length])
                  resolve();
              }, all_dates[index], all_dates[index+1])
          });
      });
      Promise.all(promises)
          .then(function() {
              // all_data.forEach( data => {
              //     console.log(data)
              // });

              res.send(all_data)
          })
          .catch(console.error);
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
