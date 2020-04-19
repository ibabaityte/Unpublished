const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    title: String,
    content: String,
    dateCreated: Date,
    dateUpdated: Date
});

module.exports = mongoose.model("Entry", entrySchema);