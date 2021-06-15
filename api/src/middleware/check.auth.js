import jwt from "jsonwebtoken";


module.exports = async (req, res, next) => {
    try {
        req.decodedToken = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        next();
    } catch(error) {
        console.log(error);
        return res.status(401).send({
            message: "Auth failed"
        });
    }
};