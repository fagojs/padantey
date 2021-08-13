const express = require("express");
const router = express.Router();

const Note = require("../models/note.model");
const User = require("../models/user.model");

router.patch("/add-to-cart", async (req, res) => {
  const { nId, userId } = req.body;
  try {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      throw new Error("User not found.");
    }
    const note = await Note.findById(nId);
    if (!note) {
      throw new Error("Note not found.");
    }
    const notePresent = user.cart.notes.find(
      (n) => n.noteId.toString() === nId.toString()
    );
    if (notePresent) {
      const noteIndex = user.cart.notes.findIndex(
        (n) => n.noteId.toString() === note._id.toString()
      );
      notePresent.quantity += 1;
      user.cart.notes[noteIndex] = notePresent;
    } else {
      user.cart.notes.push({ noteId: nId, quantity: 1 });
    }
    const updatedUser = await user.save();
    res.status(200).json({
      userData: updatedUser,
      message: "Added note to cart successfully.",
    });
  } catch (error) {
    if (error) {
      res.status(400).json({ message: "Error Adding note to cart." });
    }
  }
});

module.exports = router;
