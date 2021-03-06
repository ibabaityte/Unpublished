import mongoose, { Schema } from "mongoose";

const entrySchema = new Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

const Entries = mongoose.model("Entry", entrySchema);

module.exports = Entries;