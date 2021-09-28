const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const token = req.headers.Authrization.split(" ")[1];
  console.log("token:", token);
  const result = jwt.verify(token, process.env.private_key);
  console.log("result:", result);
  next();
};

module.exports = {
  verifyToken,
};
