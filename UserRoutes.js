const express = require("express");

const router = express.Router();

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../Controllers/userController");

const verifyToken = require("../middleware/auth");

// =======================
// Public Routes
// =======================

// Register User
router.post("/", createUser);

// Login User
router.post("/login", loginUser);

// =======================
// Protected Routes
// =======================

// Get All Users
router.get("/", verifyToken, getUsers);

// Get Single User
router.get("/:id", verifyToken, getUser);

// Update User
router.put("/:id", verifyToken, updateUser);

// Delete User
router.delete("/:id", verifyToken, deleteUser);

module.exports = router;