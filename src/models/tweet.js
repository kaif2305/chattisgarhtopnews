const mongoose = require("mongoose")


const tweet  = mongoose.Schema({
    url: String
});

module.exports=mongoose.model("Tweet",tweet)