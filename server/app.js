var express = require('express');
var app = express();

app.get('/notes', function(req, res) {
  res.json([
    {
      title: "Hardcoded Note 1",
      body_html:"Harcoded note body 1"
    },
    {
      title: "Hardcoded Note 2",
      body_html:"Harcoded note body 2"
    }
  ]);
});

app.listen(3000, function(){
  console.log('Listening on http://localhost:3000');
});
