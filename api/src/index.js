const express = require("express");
const api = express();
const port = 8080;

api.get("/", (req, res) => {
   res.send("test");
});

api.listen(port, () => {
   console.log("API running on port " + port);
});