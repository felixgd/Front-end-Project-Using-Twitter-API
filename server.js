const spawn = require('cross-spawn');
var express = require('express');
var app = express();
var path    = require("path");
var http = require("http");
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('App is running on port 3000!');
});

spawn('twitter-proxy');
spawn('http-server');

console.log('Request the Twitter API using: http://localhost:7890/1.1/statuses/user_timeline.json\?count\=30\&screen_name\=makeschool');

