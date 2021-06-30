const express = require("express");
const router = express.Router();
const playlistDetalleController = require("../controllers/playlistDetalle.controller");

// Retrieve all playlist
router.get("/", playlistDetalleController.findAll);

// Create a new playlist
router.post("/", playlistDetalleController.create);

// Retrieve a single playlist with id
router.get("/:id", playlistDetalleController.findById);

// Update a playlist with id
router.put("/:id", playlistDetalleController.update);

// Delete a playlist with id
router.delete("/:id", playlistDetalleController.delete);

module.exports = router;
