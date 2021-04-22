const express = require("express")
const MongoClient = require("mongodb").MongoClient
const app = express()
const ip = require('ip');
const ipAddress = ip.address();
const port=3000
const server_mongo = "mongodb://52.146.3.218:27017/test"
let x  = ""

function loader(MongoClient, server_mongo) {
  MongoClient.connect(server_mongo, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("inventory").find().toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}


app.get ('/', ((req,res) => {
    res.send("Hello World ")
 
  
}))

app.listen( port, ()=> {
    console.log("Server up and running")
    console.log(`Network access via: ${ipAddress}:${port}!`)

})