var db = require('mongoose');
db.connect("mongodb://mongo:mongo@127.0.0.1:27017/notely");
//db.connect("mongodb://mongo:ILoveMongo@ds053184.mongolab.com:53184/notely");

module.exports = db;
