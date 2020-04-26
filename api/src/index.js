const express = require("express");
const api = express();
const cors = require("cors");
const port = 8080;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const entryRoutes = require("./routes/entries.js");

api.use(cors());
api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
   if(err){
      console.log(err);
   } else {
      console.log("Successfully connected to database");
   }
});

api.get("/", (req, res) => {
   res.send("test");
});

require('./routes/entries.js')(api);

api.listen(port, () => {
   console.log("API running on port " + port);
});