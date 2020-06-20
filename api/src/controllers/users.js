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

module.exports = {
  register, auth
};