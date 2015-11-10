var express = require('express');
var app = express();

var db = require('./config/db');

var Note = require('./models/note');

app.use( function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/notes', function(req, res) {
  Note.find().then(
    function(notes) {
      res.json(notes);
    }
  );
  /*
  res.json([
    {
      title: "Hardcoded Note 1",
      body_html:"Harcoded note body 1"
    },
    {
      title: "Hardcoded Note 2",
      body_html:"Harcoded note body 2"
    },
    {
      title: "Hardcoded Note 3",
      body_html:"Harcoded note body 3"
    }
  ]);
  */
});

app.listen(3000, function(){
  console.log('Listening on http://localhost:3000');

});
