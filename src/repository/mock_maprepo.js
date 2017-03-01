
var mapRepo = function(config) {
    this.config = config;
    this.tweets = [
        {
        "username": "Politiet N-Tr\u00f8ndelag",
        "text": "Kl. 05.07. Fv 17 p\u00e5 strekningen mellom Kongsmoen og Foldereid melding om brann i kj\u00f8ret\u00f8y. N\u00f8detatene rykker ut.",
        "created_at": "Wed Feb 15 04:23:41 +0000 2017",
        "hashtags": [],
        "user_location": "Steinkjer, Nord-Tr\u00f8ndelag",
        "location": {
            "county": "1743",
            "latitude": 64.881661,
            "id": 240581,
            "longitude": 12.434619,
            "name": "Kongsmoen"
        },
        "retweet_count": 2,
        "id": 8.3172061236002e+17,
        "favorite_count": 0
        },
        {
        "username": "Politiet N-Tr\u00f8ndelag",
        "text": "Kl. 02.28. Levanger. E6 Ronglan. Mann i 20-\u00e5rene anmeldt for kj\u00f8ring uten gyldig f\u00f8rerkort. F\u00f8rer avh\u00f8rt - erkjent. Bilen ble ogs\u00e5 avskiltet",
        "created_at": "Wed Feb 15 03:46:04 +0000 2017",
        "hashtags": [],
        "user_location": "Steinkjer, Nord-Tr\u00f8ndelag",
        "location": {
            "county": "1719",
            "latitude": 63.753117,
            "id": 2565931,
            "longitude": 11.292367,
            "name": "Levanger"
        },
        "retweet_count": 2,
        "id": 8.3171114830734e+17,
        "favorite_count": 1
        }
    ];

  this.allTweets = () => {
      console.log("CONFIG: " + this.config)
      return this.tweets;
  };

  this.tweetsTimeSpace = (start, end) => {
      // do logic to only pick between start and end
      return this.tweets;
  }

};

module.exports.mapRepo = mapRepo;
