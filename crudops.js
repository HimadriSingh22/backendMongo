/*var router = require("express").Router();
//var assert = require("assert");
//var database = require("./database").con2;

const insertDocumnets = function(db, callback) {
  const collection = db.collection("test");
  collection.insertMany([{ b: 1 }, { b: 2 }, { b: 3 }], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    if (err) console.log("Error", err);
    console.log("inserted 3 docs");
    callback(result);
  });
};

const findDocuments = function(db, callback) {
  const collection = db.collection("test");
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found these records" + docs);
    callback(docs);
  });
};

// find docs with a query filter

// const findDocuments = function(db, callback) {
//   const collection = db.collection("test");
//   collection.find({ b: 3 }).toArray(function(err, docs) {
//     assert.equal(err, null);
//     console.log("found these records" + docs);
//     callback(docs);
//   });
// };

const updateDocument = function(db, callback) {
  const collection = db.collection("test");
  collection.updateOne({ } b: 2, { $set: { b: 4 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("updated a record");
    callback(result);
  });
};

/*router.post("/update", (req, res) => {
  database().then(client => {
    console.log("CLINET_DB:" + client.db);
    const db = client.db("test");
    db.collection("testColl")
      .find({})
      .toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found these records" + docs);
        res.send({ docs });
      });

    // insertDocumnets(client, (err, res) => {
    //   if (err) console.log("error occured:" + err);
    //   else res.send("hello");
    // });
    // });
  });
});
/* routes.post('/update',(req,res)=>{
     database.then(db=>{
        updateDocument(db,function(){
            client.close();
     })
         
})
})*/

/* routes.post('/find',(req,res)=>{
     database.then(db=>{findDocuments(db,function()
        {
        client.close();
      }
) }
     )
 })*/
