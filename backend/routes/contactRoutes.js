const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    res.json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;