var router = require("express").Router();
var database = require("./database").con2;
//var query = require("url").parse(req.url, true).query;

//const url ='mongodb://localhost:27017/promise';
//const dbName='test3';

//var db = database.getDb();

// //   db.collection('test2').insertMany([{c:1},{c:2}],(err,result)=>{
// //       if(err) console.log("Error Occured",err)

// //   });

router.get("/get", (req, res) => {
  database().then(client => {
    const db = client.db("test");
    console.log("db", client.db);
    db.collection("testColl")
      .find({})
      .toArray(function(err, docs) {
        if (err) {
          console.log("Error", JSON.stringify(err));
        }
        res.send({ docs });
      });
  });
});

router.post("/new", (req, res) => {
  database().then(client => {
    const db = client.db("test");
    console.log("Req.body", JSON.stringify(req.body));
    const newentry = {
      field: req.body.newField,
      value: req.body.newValue
    };
    db.collection("testColl").insertOne(newentry, (err, result) => {
      if (err) console.log("Error Occured", err);
      console.log("Result", result);
      res.send({ result, newentry });
    });
  });
});
router.post("/delete", (req, res) => {
  database().then(client => {
    const db = client.db("test");
    //console.log("Req.body", req.body);
    const deleteId = req.body.deletById;
    db.collection("testColl").deleteOne(deleteId, (err, result) => {
      if (err) {
        console.log("Error", JSON.stringify(err));
      }
      res.send(result);
    });
  });
});

router.post("/update", (req, res) => {
  database().then(client => {
    const db = client.db("test");
    console.log("body:" + JSON.stringify(req.body));
    const updateEntry = {
      field: req.body.newField,
      value: req.body.newValue,
      // id: `ObjectId("${req.body.id}")`
      id: req.body.id
    };
    console.log("id:", updateEntry.field);
    //const id = req.body.id;
    // console.log(updateEntry._id);
    db.collection("testColl").updateOne(
      { field: updateEntry.field },
      { $set: updateEntry },
      (err, result) => {
        if (err) console.log("Error", JSON.stringify(err));
        res.send(result);
      }
    );
  });
});
module.exports = router;
