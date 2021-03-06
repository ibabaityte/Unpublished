// const express = require("express");
// const api = express();
// const cors = require("cors");
// const port = 8080;
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const entryRoutes = require("./routes/entries.js");
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import EntryRoutes from "./routes/entries";

const api = express();
const port = 8080;

api.use(cors());
api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());
api.use(EntryRoutes);

mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
   if(err){
      console.log(err);
   } else {
      console.log("Successfully connected to database");
   }
});

// api.get("/", (req, res) => {
//    res.send("test");
// });

// require('./routes/entries.js')(api);

api.listen(port, () => {
   console.log("API running on port " + port);
});