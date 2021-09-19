const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostModel = Schema({
    title: {type: String},
    topic: {type: String},
    content: {type: String},
    created_at: {type: Date},
    edited: {type: Boolean}
});

module.exports = mongoose.model('post', PostModel);