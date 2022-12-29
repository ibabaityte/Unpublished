import mongoose from "mongoose";
import Schema from "mongoose/lib/schema.js";

const entrySchema = new Schema({
    title: String,
    content: String,
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    authorType: String
}, {
    timestamps: true
});

const Entries = mongoose.model("Entry", entrySchema);

export default Entries;