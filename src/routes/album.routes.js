const express = require("express");
const router = express.Router();
const albumController = require("../controllers/album.controller");

// Retrieve all album
router.get("/", albumController.findAll);

// Create a new album
router.post("/", albumController.create);

// Retrieve a single album with id
router.get("/:id", albumController.findById);

// Update a album with id
router.put("/:id", albumController.update);

// Delete a album with id
router.delete("/:id", albumController.delete);

module.exports = router;
