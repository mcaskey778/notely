var db = require('mongoose');
db.connect(process.env.DB_URI);
//db.connect("mongodb://mongo:ILoveMongo@ds053184.mongolab.com:53184/notely");

module.exports = db;
