import mongoose from "mongoose";
import User from "./src/models/user.js";
import bcrypt from "bcrypt";

mongoose.connect(`mongodb://127.0.0.1:27017/unpublished`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully connected to database");
    }
});

const initAdmin = async () => {
    await User.findOne({userType: "ADMIN"}).then(data => {
        if (!data) {
            bcrypt.hash("ADMIN123", 10, (err, hash) => {
                if (err) {
                    console.log(err.message);
                    mongoose.connection.close();
                } else {
                    //create new user
                    const newUser = new User({
                        username: "ADMIN123",
                        password: hash,
                        userType: "ADMIN"
                    });
                    //save user in database
                    newUser.save().then(() => {
                        console.log("Admin created");
                        mongoose.connection.close();
                    }).catch(err => {
                        console.log(err, "Some error occurred while trying to create this user");
                    });
                }
            });
        } else {
            mongoose.connection.close();
        }
    })
}

initAdmin().catch(err => console.log(err));
