const mongoose = require('mongoose');
const Schema = mongoose.Schema

const postSchema = new Schema({
    image:{
        src: String,
        alt: String
    },
    author: String,
    title: String,
    desc: String,
    postBody: String
},
{
    versionKey: false
})

module.exports = mongoose.model("Post",postSchema)