const express = require('express');
const app = express();
const port = 80;
let default_port = 3000;

var controllerLoad = require('./src/controllers/mapcontroller.js');
var controller = new controllerLoad.test1("testconfigstuff")

app.use(express.static('./build'));

process.on('uncaughtException', function(error){
  if(error.code == "EACCES"){
    start_listening(default_port);
  } else if(error.code == "EADDRINUSE"){
    default_port = default_port + 1;
    start_listening(default_port);
  }
});

function start_listening(port){
  app.listen(port, function(){
    console.log("listening on port " + port);
  });
}

app.get('/api/test', controller.test);
app.get('/api/tweets1', controller.tweetLocationsInTimeframe);

start_listening(port);

//npm run
