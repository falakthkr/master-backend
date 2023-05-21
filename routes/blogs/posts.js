const express = require("express");
const router = express.Router();
const {
  getPosts,
  addPost,
  deletePost,
  updatePost,
  getPostDetails,
} = require("../../controllers/blogs/postController");

router.get("/", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);
router.get("/:id", getPostDetails);

module.exports = router;
