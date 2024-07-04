import mongoose from "mongoose"

const Blog_Schema = new mongoose.Schema
({
    title: String,
    content: String,
    image: String,
    author: String,
    category: String,
    likedBy: [{ username: String }],
    comments: [{
        text: String,
        username: String,
        date: { type: Date, default: Date.now }
    }]
})

export const BLOG = mongoose.model("Blog",Blog_Schema)