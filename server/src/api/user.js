const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  deleteUser,
  changePassword,
} = require("../controllers/userController");
const { protect } = require("../middleware/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", protect, getMe);
router.delete("/", protect, deleteUser);
router.patch("/change", protect, changePassword);

module.exports = router;
