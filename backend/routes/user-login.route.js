const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/user.model");
const validateUserLogin = require("../validation/user-login.validation");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { errors, isValid } = validateUserLogin(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      errors.email = "User with that email is not registered.";
      return res.status(400).json(errors);
    }

    const isMatched = await bcrypt.compare(req.body.password, user.password);

    if (!isMatched) {
      errors.password = "Password is incorrect.";
      return res.status(400).json(errors);
    }

    jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.secretKey,
      { expiresIn: 3600 },
      (err, token) => {
        return res.status(200).json({
          token,
          message: `${user.name}, you're logged in successfully.`,
        });
      }
    );
  } catch (error) {
    errors.login = "Error logging-in user.";
    res.status(400).json(errors);
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.status(200).json(user);
});

module.exports = router;
