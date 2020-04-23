const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Entry", entrySchema);