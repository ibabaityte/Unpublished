import mongoose from "mongoose";
import Schema from "mongoose/lib/schema.js";

const userType = {
    ADMIN: 'ADMIN',
    USER: 'USER'
}

const userSchema = new Schema({
    username: String,
    password: String,
    userType: {
        type: String,
        enum: Object.values(userType),
        default: userType.USER
    }
});

const Users = mongoose.model("user", userSchema);

export default Users;