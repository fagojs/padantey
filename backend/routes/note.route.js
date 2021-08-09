const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth.middleware");
const Note = require("../models/note.model");

const validateNoteInput = require("../validation/note.validation");

router.post("/add-note", auth, (req, res) => {
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
      user: req.user.id,
      date: req.body.date,
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
router.get("/get-note", auth, async (req, res) => {
  try {
    const notes = await Note.find();
    if (!notes) {
      return res.status(400).json({ message: "There are no notes currently." });
    }
    res.status(201).json({
      notesData: notes,
    });
  } catch (error) {
    res.status(400).json({ message: "Error fetching notes." });
  }
});

module.exports = router;
