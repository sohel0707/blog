const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    throw new Error("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.id = decoded;
  } catch (err) {
    throw new Error("Invalid Token");
  }
  return;
};

module.exports = {verifyToken};