var express = require("express");
var route = require("express").Router();
const assert = require("assert");
//route.get('/test',function(req,res,next){
// res.send("testing  newly created route ");
//MongoClient.connect(url,function(err,client)
// {

//  })
//});
const url = "";
const url1 = "mongodb://localhost:27017/promise";
const MongoClient = require("mongodb").MongoClient;

route.post("/fetch", (req, res) => {
  console.log(req.body);
  //var name=req.body.name;
  res.send("fetch called ");
});

route.post("/new", (req, res) => {
  // Database Name
  const dbName = "test";

  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");
    assert.equal(null, err);
    const db = client.db(dbName);
    console.log(req.body);
    var post = req.body;
    console.log(post);
    res.send("new Called!!");
    db.collection("testC").insertOne(post, (err, result) => {
      if (err) console.log("Error Occured", err);
      console.log("Result", result);
      res.send({ result });
    });
  });

  console.log(req.body);
  db.collection("test2").insertMany(
    [{ a: 1 }, { a: 2 }, { a: 3 }],
    (err, result) => {
      if (err) console.log("Error Occured", err);
      console.log(result);
    }
  );
  client.close();
});

MongoClient.connect(url1)
  .then(function(db) {
    console.log("Successfully inserted the values to db" + db);
  })
  .catch(function(err) {
    console.log("error occcured");
  });
module.exports = route;
