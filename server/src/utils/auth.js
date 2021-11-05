const jwt = require("jsonwebtoken");

export const tokenVerify = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["token"];
    if (!token) {
        return res.status(403).send({message:"A token is required for authentication"});
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send({message:"Invalid Token"});
    }
    return next();
};

