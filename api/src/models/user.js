import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: String,
    password: String
});

const Users = mongoose.model("user", userSchema);

module.exports = Users;