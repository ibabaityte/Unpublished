import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import connectMongo from 'connect-mongo';
import session from 'express-session';

// util imports
import {initAdmin} from "./utils/initUtils.js";
const MongoStore = connectMongo(session);

import EntryRoutes from "./routes/entries.js";
import UserRoutes from "./routes/users.js";

const api = express();
const port = 8081;
const sessionSecret = process.env.SESSION_SECRET;

api.use(cors());
api.use(session({
   secret: sessionSecret,
   store: new MongoStore({ mongooseConnection: mongoose.connection }),
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

mongoose.connect("mongodb://127.0.0.1:27017", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, (err) => {
   if(err){
      console.log(err);
   } else {
      console.log("Successfully connected to database");
   }
});

api.listen(port, () => {
   console.log("API running on port " + port);
   initAdmin();
});
