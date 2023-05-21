const Post = require("../../models/blogs/posts");

const getPosts = (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
};

const getPostDetails = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

const addPost = (req, res) => {
  const { image, title, desc, postBody } = req.body;
  const newPost = new Post({ image, title, desc, postBody });

  newPost
    .save()
    .then(() => res.json("Post added successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted post data successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const updatePost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      if (req.body.title) {
        post.title = req.body.title;
      }
      if (req.body.title) {
        post.title = req.body.title;
      }
      if (req.body.image) {
        post.image = req.body.image;
      }
      if (req.body.postBody) {
        post.postBody = req.body.postBody;
      }
      if (req.body.desc) {
        post.desc = req.body.desc;
      }
      post
        .save()
        .then(() => res.json("Post updated Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getPosts, addPost, deletePost, updatePost, getPostDetails };
