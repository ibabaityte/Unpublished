import Users from "../models/user";

const register = (req, res) => {
    //create new user
    const newUser = {
        username: req.body.username,
        password: req.body.password
    };

    //save user in database
    Users.save(newUser).then(data => {
        res.send(data);
    }).catch(err => {
        res.send({
            message: err.message
        });
    });
};

// const auth = (req, res) => {
//
// };

const get = (req, res) => {
    Users.findById(req.params.id).then(user =>  {
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
    Users.findByIdAndRemove(req.params.id).then(user => {
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
  register, get, remove
};