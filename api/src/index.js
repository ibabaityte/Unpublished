const express = require("express");
const api = express();
const cors = require("cors");
const port = 8080;
const mongoose = require("mongoose");
const entryRoutes = require("./routes/entries.js");

mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
   if(err){
      console.log(err);
   } else {
      console.log("Successfully connected to database");
   }
});

// mongoose.connect("mongodb://localhost:27017", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
// }).then(() => {
//    console.log("Successfully connected to the database");
// }).catch(err => {
//    console.log('Could not connect to the database. Exiting now...', err);
//    process.exit();
// });

api.use(cors());

api.get("/", (req, res) => {
   res.send("test");
});

api.listen(port, () => {
   console.log("API running on port " + port);
});