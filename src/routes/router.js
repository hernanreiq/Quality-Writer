const { Router } = require('express');
const route = Router();

const PostModel = require('../models/post');

route.get('/', (req, res) => {
    res.json({
        message: "API is work!"
    })
});


module.exports = route;