require('dotenv').load();

var express = require('express');
var app = express();

var Note = require('./models/note');

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use( function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  //res.header('Access-Control-Allow-Methods', 'GET,post,put,delete');
  next();
});

app.get('/notes', function(req, res) {
  Note.find().then(
    function(notes) {
      res.json(notes);
    }
  );
});

app.post('/notes', function(req, res) {
  var note = new Note({
    title: req.body.note.title,
    body_html: req.body.note.body_html
  });
  note.save().then(function(data) {
    res.json({
      message: "Success",
      note: data
    });
  });
});

app.listen(3000, function(){
  console.log('Listening on http://localhost:3000');

});
