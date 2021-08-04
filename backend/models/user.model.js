const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contact: { type: Number, required: true },
  university: { type: String },
  college: { type: String },
  faculty: { type: String },
  semester: { type: Number },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("User", userSchema);
