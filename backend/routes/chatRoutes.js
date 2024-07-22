const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroup,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/new-group").post(protect, createGroup);
router.route("/rename-group").put(protect, renameGroup);
router.route("/add-to-group").put(protect, addToGroup);
router.route("/remove-from-group").put(protect, removeFromGroup);

module.exports = router;
