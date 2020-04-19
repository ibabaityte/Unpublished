const express = require("express");
const api = express();
const cors = require("cors");
const port = 8080;

mongoose.connect("mongodb://localhost:8080");

api.use(cors());

api.get("/", (req, res) => {
   res.send("test");
});

api.listen(port, () => {
   console.log("API running on port " + port);
});