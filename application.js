var express = require('express');
var razor   = require('kally-razor');

var app     = express();

app.set('port', process.env.PORT || 1337);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());

app.get('/', function (req, res) {
    res.send('It worked!');
});

app.listen(app.get('port'));
console.log('Waiting for connections on port ' + app.get('port'));