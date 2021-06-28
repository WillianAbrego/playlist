const express = require("express");
const router = express.Router();
const cancionController = require("../controllers/cancion.controller");

// Retrieve all album
router.get("/", cancionController.findAll);

// Create a new album
router.post("/", cancionController.create);

// Retrieve a single album with id
router.get("/:id", cancionController.findById);

// Update a album with id
router.put("/:id", cancionController.update);

// Delete a album with id
router.delete("/:id", cancionController.delete);

module.exports = router;
