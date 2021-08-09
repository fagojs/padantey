const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  carts: {
    notes: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Note", required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },
  contact: { type: Number, required: true },
  university: { type: String },
  college: { type: String },
  faculty: { type: String },
  semester: { type: String },
});

module.exports = mongoose.model("User", userSchema);
