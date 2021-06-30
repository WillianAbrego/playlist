const express = require("express");
const router = express.Router();
const favController = require("../controllers/fav.controller");

// Retrieve all artist
router.get("/", favController.findAll);

// Create a new artist
router.post("/", favController.create);

// Retrieve a single artist with id
router.get("/:id", favController.findById);

// Update a artist with id
router.put("/:id", favController.update);

// Delete a artist with id
router.delete("/:id", favController.delete);

module.exports = router;
