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
import dotenv from "dotenv";
dotenv.config();
import session from "express-session";

import EntryRoutes from "./routes/entries";
import UserRoutes from "./routes/users";

const api = express();
const port = 8081;
const sessionSecret = process.env.SESSION_SECRET;

api.use(cors());
api.use(session({
   secret: sessionSecret,
   resave: false,
   saveUninitialized: false,
   cookie: {
      maxAge: 600000
   }
}));
api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());
api.use(express.json());
api.use(EntryRoutes);
api.use(UserRoutes);

mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, (err) => {
   if(err){
      console.log(err);
   } else {
      console.log("Successfully connected to database");
   }
});

// api.get("/", (req, res) => {
//    res.send("test");
// });

api.listen(port, () => {
   console.log("API running on port " + port);
});