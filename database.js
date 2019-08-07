const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://localhost:27017";
const url1 =
  "mongodb+srv://dbUser:dbUserPass@learnatlas-5iwx3.mongodb.net/test";

module.exports = {
  con: () => {
    return MongoClient.connect(url).catch(err =>
      console.log("catch executed", err)
    );
  },
  con2: () => {
    return MongoClient.connect(url1, { useNewUrlParser: true }).catch(e =>
      console.log("Error Occured:" + JSON.stringify(e))
    );
    // function(err, client) {
    //     if (err) console.log("Error Occured:" + JSON.stringify(err));
    //     assert.equal(null, err);
    //     console.log("Connected successfully to server");

    //     return client.db("test");
    //   });
  }

  // getDb: function() {
  //   return db;
  // },

  // getDbName: function() {
  //   return dbName;
  // }
};
