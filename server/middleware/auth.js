const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if(!token){
        return res.status(403).send("A token is requried for authentication")
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
        console.log(decoded)
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};
console.log("auth.js output")
console.log(verifyToken);
module.exports = verifyToken;