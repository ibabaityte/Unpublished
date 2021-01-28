import jwt from "jsonwebtoken";

module.exports = (req, res, next) => {
    try {
        req.decodedToken = jwt.verify(req.header('Authorization'), process.env.JWT_SECRET);
        next();
    } catch(error) {
        return res.status(401).send({
            message: "Auth failed"
        });
    }
};