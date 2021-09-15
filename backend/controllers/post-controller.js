const PostModel = require('../models/post');

const PostController = {
    getOnePost: async (req, res) => {
        const search = req.query.search;
        const posts = await PostModel.find({
            $or: [
                { title: { $regex: '.*' + search + '.*', $options: 'i' } },
                { content: { $regex: '.*' + search + '.*', $options: 'i' } },
                { topic: { $regex: '.*' + search + '.*', $options: 'i' } }]
        });
        res.json(posts);
    },
    getAllPosts: async (req, res) => {
        const posts = await PostModel.find();
        res.json(posts);
    },
    savePost: async (req, res) => {
        const { title, topic, content } = req.body;
        const newPost = new PostModel({
            title: title,
            topic: topic,
            content: content,
            created_at: Date.now(),
        });
        await newPost.save();
        res.json(true);
    },
    updatePost: async (req, res) => {
        const { title, topic, content } = req.body;
        const idPost = req.params.id;
        const newDataPost = { title, topic, content };
        await PostModel.findByIdAndUpdate(idPost, newDataPost)
        res.json('Post updated!')
    },
    deletePost: async (req, res) => {
        const idPost = req.params.id;
        await PostModel.findByIdAndDelete(idPost);
        res.json('Post deleted!')
    }
}

module.exports = PostController;