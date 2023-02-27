const mongoose = require("mongoose")


const carousel  = mongoose.Schema({
    slide1:[
        {
            imageUrl: String,
            title: String,
            date: String,
            url: String,
        }
    ],
    slide2:[
        {
            imageUrl: String,
            title: String,
            date: String,
            url: String,
        }
    ],
    slide3:[
        {
            imageUrl: String,
            title: String,
            date: String,
            url: String,
        }
    ],
});

module.exports=mongoose.model("carousel",carousel)