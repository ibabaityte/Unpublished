import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secret_key = "secret_key46536";

const register = (req, res) => {
    if(!req.body.username || !req.body.password) {
        return res.status(400).send({
            message: "Username and password can not be empty"
        });
    }

    User.findOne({username: req.body.username}).then(user => {
       if(user.length >= 1) {
           return res.status(409).send({
               message: "Username already exists"
           });
       } else {
           bcrypt.hash(req.body.password, 10, (err, hash) => {
               if (err) {
                   return res.status(500).send({
                       message: err.message
                   });
               } else {
                   //create new user
                   const newUser = new User({
                       username: req.body.username,
                       password: hash
                   });
                   //save user in database
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
};

const auth = (req, res) => {
    User.findOne({username: req.body.username}).then(user => {
        if (user == null) {
            return res.status(401).send({
                message: "Auth failed"
            });
        } else {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).send({
                        message: "Auth failed"
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        username:  user.username,
                        userId: user._id
                    }, secret_key, {
                        expiresIn: "1h"
                    });
                    return res.status(200).send({
                        message: "Auth successful",
                        token: token
                    });
                }
                res.status(401).send({
                    message: "Auth failed"
                });
            });
        }

    });
};

const get = (req, res) => {
    User.findById(req.params.id).then(user =>  {
        if(!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }
        res.status(200).send(user);
    }).catch(err => {
       res.status(500).send({
           message: err.message || "An error occurred while retrieving user"
       });
    });
};

// const update = (req, res) => {
//
// };

const remove = (req, res) => {
    User.findByIdAndRemove(req.params.id).then(user => {
        if(!user) {
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
            message: "Could not delete this user profile"
        });
    });
};

module.exports = {
  register, auth, get, remove
};