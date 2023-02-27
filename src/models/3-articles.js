const mongoose = require("mongoose")


const three_articles  = mongoose.Schema({
    imageUrl: String,
    Url: String,
    title: String,
    date: String,
    content: String,
});

module.exports=mongoose.model("3-articles",three_articles)