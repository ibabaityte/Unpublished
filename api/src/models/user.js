import mongoose, {Schema} from "mongoose";

const userType = {
    ADMIN: 'ADMIN',
    USER: 'USER'
}

// TODO nice to have: lastLogin date field
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

module.exports = Users;