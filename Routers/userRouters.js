const express = require("express");
const router = express.Router();

const {
  signupUser,
  loginUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../Controllers/userController");

const { protect, adminOnly } = require("../Middleware/authMiddleware");

// AUTH
router.post("/signup", signupUser);
router.post("/login", loginUser);

// ADMIN CRUD
router.get("/", protect, adminOnly, getAllUsers);
router.put("/:id", protect, adminOnly, updateUser);
router.delete("/:id", protect, adminOnly, deleteUser);

module.exports = router;
