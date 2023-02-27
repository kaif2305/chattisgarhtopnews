const mongoose = require("mongoose")


const bulletin_news  = mongoose.Schema({
    title: String,
    Url: String,
    imageUrl: String,
});

module.exports=mongoose.model("bulletin-breaking-news",bulletin_news)