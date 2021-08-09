const express = require("express");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const User = require("../models/user.model");
const validateUserRegister = require("../validation/user-register.validation");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { errors, isValid } = validateUserRegister(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      errors.email = "User with that email already exists.";
      return res.status(400).json(errors);
    }
    const avatar = gravatar.url(req.body.email, {
      s: "200",
      r: "pg",
      d: "mm",
    });
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatar,
      contact: req.body.contact,
      university: req.body.university,
      college: req.body.college,
      faculty: req.body.faculty,
      semester: req.body.semester,
    });
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        const savedUser = await newUser.save();
        jwt.sign(
          {
            id: savedUser.id,
            username: savedUser.username,
            email: savedUser.email,
          },
          process.env.secretKey,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.status(201).json({
              token,
              message: `${savedUser.username}, you're registered successfully.`,
            });
          }
        );
      });
    });
  } catch (error) {
    errors.message = "Error adding user.";
    res.status(400).json(errors);
  }
});

module.exports = router;
