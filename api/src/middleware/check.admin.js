import jwt from "jsonwebtoken";


export default async (req, res, next) => {
    try {
        req.decodedToken = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        console.log(req.decodedToken);
        if(req.decodedToken.userType === "ADMIN") {
            next();
        } else {
            return res.status(401).send({
               message: "Auth failed"
            });
        }
    } catch(error) {
        return res.status(401).send({
            message: "Auth failed"
        });
    }
};