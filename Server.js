var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

//var testrouter = require('./testroute');
// database.connectToServer( function( err, client ) {

//     if (err) console.log(err);
//     console.log("Connected successfully!!");
//   } );
app.use(bodyParser.json());
app.use(cors());
//app.use("/", testrouter);
//var crudopr = require("./crudops");
//app.use("/update", crudopr);

app.use("/test", require("./testAnotheroute"));
//app.use("/post", require("./testAnotheroute"));

app.listen(8080, () => {
  console.log(`server running at localhost:8080`);
});

module.exports = app;
