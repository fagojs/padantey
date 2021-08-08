const mongoose = require("mongoose");

const { Schema } = mongoose;

const noteSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  page: { type: String, required: true },
  quality: { type: String, default: "Better" },
  description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Note", noteSchema);
