const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const userRegisterRoutes = require("./routes/user-register.route");
const userLoginRoutes = require("./routes/user-login.route");
const noteRoutes = require("./routes/note.route");

const app = express();
const port = process.env.PORT_NUM || 5000;

app.use(express.json());
app.use("/new-user", userRegisterRoutes);
app.use("/user", userLoginRoutes);
app.use("/note", noteRoutes);

app.listen(port, () => {
  console.log(`Successfully running at http://localhost:${port}.`);
});

mongoose.connect(
  `${process.env.DB_USER}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Cannot	connect	to	database.");
    }
    console.log("Successfully connected to database.");
  }
);
