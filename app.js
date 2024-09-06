var express = require('express');
var app = express();

var port = 3001;

app.use(express.static('public'));
app.use(express.static('source/views'));
app.use(express.static('bower_components'));

app.get('/', function(req, res){
    res.send('Howdy Yall!');
});

app.get('/outro', function(req, res){
    res.send('See Yall Later!');
});
app.listen(port, function(err){
    console.log('The server is running on port:' + port);
});