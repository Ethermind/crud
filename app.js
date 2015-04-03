var express = require('express'),
    restful = require('node-restful'),
    mongoose = restful.mongoose,
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.query());

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/bower_components'));

mongoose.connect("mongodb://localhost/resources");

var Resource = app.resource = restful.model('resource', {
    title: String,
    year: Number
  })
  .methods(['get', 'post', 'put', 'delete']);

Resource.register(app, '/resource');    

app.get('/', function(req, res){
    res.sendfile("/views/index.html");
});

app.get('*', function(req, res){
    res.send("Service not found");
});

app.listen(3000);