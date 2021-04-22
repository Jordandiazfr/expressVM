
var MongoClient = require('mongodb').MongoClient
, format = require('util').format;

MongoClient.connect('mongodb://52.146.3.218:27017/test', function(err, db) {
if(err) throw err;

var collection = db.collection('inventory');
collection.insert({a:2}, function(err, docs) {
    collection.count(function(err, count) {
        console.log(format("count = %s", count));
    });
});

// Locate all the entries using find
collection.find().toArray(function(err, results) {
    console.dir(results);
    // Let's close the db
    db.close();
});
});