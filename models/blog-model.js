const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    author: {
        type: String
    },
    title: {
        type: String
    },
    avatar: {
        type: String
    },
    userId: {
        type: String
    },
    type: {
        type: String
    }
});

const blogModel = mongoose.model('blogcollection', blogSchema);

module.exports = blogModel;
