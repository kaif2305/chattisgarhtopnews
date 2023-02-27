const mongoose = require("mongoose")
const marquee  = mongoose.Schema({
    time: String,
    news: String,
});

module.exports=mongoose.model("Marquee",marquee)