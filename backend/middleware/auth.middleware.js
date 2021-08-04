const jwt = require("jsonwebtoken");

auth = async (req, res, next) => {
  let errors = {};
  const token = req.header("x-auth-token");
  try {
    if (!token) {
      errors.message = "Unauthorized access.";
      return res.status(400).json(errors);
    }
    const decodedUser = await jwt.verify(token, process.env.secretKey);
    req.user = decodedUser;
    next();
  } catch (error) {
    if (error) {
      errors.message = "Not authorized user.";
      return res.status(400).json(errors);
    }
  }
};

module.exports = auth;
