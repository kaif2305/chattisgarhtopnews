const mongoose = require("mongoose")
const youtube  = mongoose.Schema({
    url:String,
});

module.exports=mongoose.model("youtube",youtube)