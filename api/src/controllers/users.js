import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.JWT_SECRET;

const register = (req, res) => {
    if(!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: "Username and password can not be empty"
        });
    }

    User.findOne({username: req.body.username}).then(user => {
       if(user) {
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
        if (!user) {
            return res.status(401).send({
                message: "Auth failed"
            });
        }
        else {
            bcrypt.compare(req.body.password, user.password).then(result => {
                if (result) {
                    const token = jwt.sign({
                        username:  user.username,
                        userId: user._id
                    }, secretKey, {
                        expiresIn: "1h"
                    });

                    // console.log(token);
                    return res.status(200).send({
                        message: "Auth successful",
                        token: token,
                        userId: user._id
                    });
                }
                else {
                    res.status(401).send({
                        message: "Auth failed"
                    });
                }
            }).catch(err => console.log(err));
        }

    });
};

const get = (req, res) => {
        User.findById(req.params.userId).then(user =>  {
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
    User.findByIdAndRemove(req.params.userId).then(user => {
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

/*
* TODO
* Fill with the following logic:
* 1. If no ADMIN user exists(search in DB for users with ADMIN userType(count of such users should be 1))
* 2. Then create an ADMIN user
* 3. Else do nothing
* 4. Nice to have: have a config with default ADMIN user login/password with preset values
* 4.1 Second nice to have: Force that user to change their password upon first login to the system(should implement lastLogin date field)
* 4.1.1 Second nice to have additional notes: Expand login functionality to store lastLogin field
* 4.2 Based on lastLogin the system should determine if the user needs to change their password
* 4.2.1 I.E. if lastLogin === null then force password change; else do nothing;
* */
const init = (req, res) => {

}

module.exports = {
  register, auth, get, remove, logout, init
};