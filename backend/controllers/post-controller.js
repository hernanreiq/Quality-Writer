const PostModel = require('../models/post');

const PostController = {
    SearchPost: async (req, res) => {
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
        const posts = await PostModel.find().sort({_id: -1});
        res.json(posts);
    },
    savePost: async (req, res) => {
        const { title, topic, content } = req.body;
        const newPost = new PostModel({
            title: title,
            topic: topic,
            content: content,
            created_at: Date.now(),
            edited: false
        });
        await newPost.save();
        res.json(true);
    },
    updatePost: async (req, res) => {
        const { title, topic, content } = req.body;
        const idPost = req.params.id;
        const newDataPost = { title: title, topic: topic, content: content, edited: true };
        await PostModel.findByIdAndUpdate(idPost, newDataPost);
        res.json(true);
    },
    deletePost: async (req, res) => {
        const idParamsPost = req.params.id;
        const idBodyPost = req.body.id;
        if(idParamsPost === idBodyPost){
            await PostModel.findByIdAndDelete(idParamsPost);
        }
        res.json(true);
    }
}

module.exports = PostController;