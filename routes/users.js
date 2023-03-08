const express = require('express');
const router = express.Router();
const { getUsers, addUser, deleteUser, updateUser, getUserDetails } = require("../controllers/userControllers");

router.get("/", getUsers);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
router.get("/:id", getUserDetails);

module.exports = router;