import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_SECRET;

const register = (req, res) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).send({
            code: "400",
            message: "Username and password can not be empty."
        });
    }

    const number = /\d/;
    if(!number.test(req.body.password)){
        return res.status(400).send({
            code: "400",
            message: "Password has to contain at least one number."
        });
    }

    User.findOne({username: req.body.username}).then(user => {
        if (user) {
            return res.status(409).send({
                code: "409",
                message: "This username already exists. Try again."
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).send({
                        code: "500",
                        message: "Something went wrong during register. Try again."
                    });
                } else {
                    //create new users
                    const newUser = new User({
                        username: req.body.username,
                        password: hash
                    });
                    //save users in database
                    newUser.save()
                        .then(data => {
                            res.send(data);
                        }).catch(() => {
                        res.status(500).send({
                            code: "500",
                            message: "Something went wrong during register. Try again."
                        });
                    });
                }
            });
        }
    });
};

const auth = (req, res) => {
    User.findOne({username: req.body.username}).then(user => {
        if (!req.body.username || !req.body.password) {
            return res.status(400).send({
                code: "400",
                message: "Username and password can not be empty."
            });
        }

        if (!user) {
            return res.status(401).send({
                message: "There is no such user. Try again."
            });
        } else {
            bcrypt.compare(req.body.password, user.password)
                .then(result => {
                    if (result) {
                        const token = jwt.sign({
                            username: user.username,
                            userId: user._id,
                            userType: user.userType,
                            expirationTimestamp: Date.now()
                        }, secretKey, {
                            expiresIn: "1h"
                        });
                        // console.log(token);
                        return res.status(200).send({
                            message: "Logged in successfully.",
                            token: token,
                            userId: user._id,
                            userType: user.userType,
                            username: user.username,
                            expirationTimestamp: Date.now() + 1000 * 60 * 60
                        });
                    } else {
                        res.status(401).send({
                            code: "401",
                            message: "Something went wrong during login. Try again."
                        });
                    }
                })
                .catch(() => {
                    res.status(500).send({
                        code: "500",
                        message: "Something went wrong during login. Try again."
                    });
                });
        }
    });
};

const get = (req, res) => {
    User.findById(req.params.userId).then(user => {
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }
        res.status(200).send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving users"
        });
    });
};

const remove = (req, res) => {
    User.findByIdAndRemove(req.params.userId).then(user => {
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }
        res.status(200).send({message: "User profile deleted successfully"});
    }).catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                message: "User not found"
            });
        }
        return res.status(500).send({
            message: "Could not delete this users profile"
        });
    });
};

const logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(req.session);
            return res.status(500).send({
                message: "Could not successfully logout"
            });
        }
        return res.status(200).send({
            message: "Successfully logged out"
        });
    });
};

const init = (req, res) => {
    User.findOne({userType: "ADMIN"}).then(user => {
        if (!user) {
            bcrypt.hash("ADMIN123", 10, (err, hash) => {
                if (err) {
                    return res.status(500).send({
                        message: err.message
                    });
                } else {
                    //create new users
                    const newUser = new User({
                        username: "ADMIN123",
                        password: hash,
                        userType: "ADMIN"
                    });
                    //save users in database
                    newUser.save().then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.send({
                            message: err.message
                        });
                    });
                }
            });
        }
    });
}

const listAllUsers = (req, res) => {
    User.find({userType: "USER"}).then(user => {
        res.status(200).send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all users entries"
        });
    });
}


export default {
    register, auth, get, remove, logout, init, listAllUsers
};
