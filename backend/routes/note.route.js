const express = require("express");

const router = express.Router();

const Note = require("../models/note.model");

const validateNoteInput = require("../validation/note.validation");

router.post("/add-note", (req, res) => {
  const { errors, isValid } = validateNoteInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  //if-not errors
  try {
    const newNote = new Note({
      name: req.body.name,
      author: req.body.author,
      price: req.body.price,
      page: req.body.page,
      quality: req.body.quality,
      description: req.body.description,
    });

    newNote
      .save()
      .then((note) => res.status(201).json(note))
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    return res.status(400).json({ message: "Cannot add note to database." });
  }
});

module.exports = router;
