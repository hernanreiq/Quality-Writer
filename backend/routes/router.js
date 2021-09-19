const { Router } = require('express');
const route = Router();
const PostController = require("../controllers/post-controller");

route.get('/api/post', PostController.SearchPost);
route.get('/api/posts', PostController.getAllPosts);
route.post('/api/post', PostController.savePost);
route.put('/api/post/:id', PostController.updatePost);
route.delete('/api/post/:id', PostController.deletePost);

module.exports = route;