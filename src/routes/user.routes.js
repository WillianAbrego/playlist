const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Retrieve all artist
router.get("/", userController.findAll);

// Create a new artist
router.post("/", userController.create);

// Retrieve a single artist with id
router.get("/:id", userController.findById);

// Update a artist with id
router.put("/:id", userController.update);

// Delete a artist with id
router.delete("/:id", userController.delete);

module.exports = router;
