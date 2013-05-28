var express = require('express');
var razor   = require('kally-razor');
var Home    = require('./src/controllers/home.js');

var app     = express();
var home    = new Home({ dirname: __dirname })
app.set('port', process.env.PORT || 1337);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.get('/', home.index);
app.get('/about', home.about);

app.listen(app.get('port'));
console.log('Waiting for connections on port ' + app.get('port'));