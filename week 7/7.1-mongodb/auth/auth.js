const jwt = require("jsonwebtoken");
const JWT_SECRET = "s3cret";

function auth(req, res, next) {
    const token = req.headers.token;
    
    // console.log(token);
    // console.log(req.headers);

    const response = jwt.verify(token, JWT_SECRET);
    console.log(response);
    if (response) {
        req.userId = response.id;
       
        console.log(response.id)
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}