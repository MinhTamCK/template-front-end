var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/out'));

app.get('/', function(req, res) {
    console.log('__dirname', __dirname);
    res.sendFile(__dirname+'/out/html/index.html');
});

app.get('/out/js/all.js', function(req, res) {
	res.sendFile('all.js');
});

var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://localhost:3000');

});
