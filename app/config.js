var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/shortlydb');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', function() {
  console.log('mongodb connection is open!');
});
module.exports = db;


                          


