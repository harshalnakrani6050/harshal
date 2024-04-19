const mongoose = require('mongoose');
const Post = mongoose.model('Post', { title: String, content: String });


const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
});

const adminModel = mongoose.model('adminscollections',adminSchema);

module.exports = adminModel;