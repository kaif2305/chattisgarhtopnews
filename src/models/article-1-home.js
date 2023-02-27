const mongoose = require("mongoose")


const HomeArticle1  = mongoose.Schema({
    genre: String,
    title: String,
    date : String,
    imageUrl: String,
    content: String,
});

module.exports=mongoose.model("article-1-home",HomeArticle1)