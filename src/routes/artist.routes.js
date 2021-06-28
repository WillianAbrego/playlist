const express = require("express");
const router = express.Router();
const artistController = require("../controllers/artist.controller");

// Retrieve all artist
router.get("/", artistController.findAll);

// Create a new artist
router.post("/", artistController.create);

// Retrieve a single artist with id
router.get("/:id", artistController.findById);

// Update a artist with id
router.put("/:id", artistController.update);

// Delete a artist with id
router.delete("/:id", artistController.delete);

module.exports = router;
