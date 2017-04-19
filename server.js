const express = require('express');
const app = express();
const port = 80;
const db = require('./db');
let default_port = 3000;

const controllerLoad = require('./src/controllers/mapcontroller.js');
const controller = new controllerLoad.test1("testconfigstuff");

app.use(express.static('./build'));

process.on('uncaughtException', (error) => {
    if (error.code == "EACCES") {
        start_listening(default_port);
    } else if (error.code == "EADDRINUSE") {
        default_port = default_port + 1;
        start_listening(default_port);
    }
});


function start_listening(port) {
    // Connect to Mongo on start
    db.connect('mongodb://localhost:27017/TMA4851', (err) => {
        if (err) {
            console.log('Unable to connect to Mongo.');
            process.exit(1)
        } else {
            app.listen(port, () => {
                console.log("listening on port " + port);
            });
        }
    });
}


app.get('/api/test', controller.test);
app.get('/api/test2', controller.test2);
app.get('/api/test3', controller.test3);
app.get('/api/tweets1', controller.tweetLocationsInTimeframe);
app.get('/api/tweets/byword', controller.tweetsByWord);
app.get('/api/num', controller.numTweetsInTimeFrame);

start_listening(port);

//npm run
