const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    
    const token = req.headers.authorization.split(" ")[1];
    let decoded = jwt.verify(token, "secret_this_should_be_longer");
    req.body.userId = decoded.userId; // session
    return true;
  } catch (error) {
    res.status(401).send({ message: "Auth failed!" });
    return false;
  }
};